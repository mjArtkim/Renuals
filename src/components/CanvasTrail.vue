<template>
  <canvas ref="canvas" class="trail-canvas"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref(null)

onMounted(() => {
  let c = canvas.value
  let ctx = c.getContext('2d')
  let trails = []

  const ns = {}
  ns.point = function (x, y) {
    this.x = x
    this.y = y
  }
  ns.point.prototype = {
    add(p) {
      return new ns.point(this.x + p.x, this.y + p.y)
    },
    sub(p) {
      return new ns.point(this.x - p.x, this.y - p.y)
    },
    negate() {
      this.x *= -1
      this.y *= -1
      return this
    },
    clone() {
      return new ns.point(this.x, this.y)
    },
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    normalize(scale = 1) {
      const l = this.length()
      this.x = (this.x / l) * scale
      this.y = (this.y / l) * scale
      return this
    }
  }

  ns.stroke = function (anchors, width, strokeCount, color) {
    this.anchors = anchors
    this.width = width
    this.strokeCount = strokeCount
    this.color = color
  }

  ns.stroke.prototype = {
    normal(p0, p1) {
      return new ns.point(-(p1.y - p0.y), p1.x - p0.x)
    },
    draw(ctx) {
      if (!this.anchors) return
      let p, c, n, pnorm, pln, prn, cnorm, cln, crn
      for (let j = 0; j < this.strokeCount; j++) {
        let half = this.width * 0.5 * Math.random()
        let col = ns.variation(this.color, 35)
        ctx.lineWidth = 0.1 + Math.random() * 2

        for (let i = 0; i < this.anchors.length - 2; i++) {
          p = this.anchors[i]
          c = this.anchors[i + 1]
          n = this.anchors[i + 2]

          pnorm = this.normal(p, c)
          cnorm = this.normal(c, n)

          half += Math.random() - 0.5
          pnorm.normalize(half)
          pln = p.add(pnorm)
          pnorm.normalize(-half)
          prn = p.add(pnorm)

          half += Math.random() - 0.5
          cnorm.normalize(half)
          cln = c.add(cnorm)
          cnorm.normalize(-half)
          crn = c.add(cnorm)

          ctx.beginPath()
          ctx.strokeStyle = col
          ctx.moveTo(prn.x, prn.y)
          ctx.lineTo(crn.x, crn.y)
          ctx.stroke()
          ctx.closePath()

          ctx.beginPath()
          ctx.strokeStyle = col
          ctx.moveTo(pln.x, pln.y)
          ctx.lineTo(cln.x, cln.y)
          ctx.stroke()
          ctx.closePath()
        }
      }
    }
  }

  ns.variation = function (color, amount = 25) {
    let r = (color >> 16) & 0xff
    let g = (color >> 8) & 0xff
    let b = color & 0xff

    r += Math.floor((Math.random() - 0.5) * amount)
    g += Math.floor((Math.random() - 0.5) * amount)
    b += Math.floor((Math.random() - 0.5) * amount)

    r = Math.max(0, Math.min(255, r))
    g = Math.max(0, Math.min(255, g))
    b = Math.max(0, Math.min(255, b))

    return `rgba(${r},${g},${b},${Math.random()})`
  }

  ns.trailer = function (colors) {
    this.points = []
    this.stroke = new ns.stroke(null, 100, 10, colors[0])
    this.colorIterator = 0
    this.colors = colors
  }

  ns.trailer.prototype = {
    reset() {
      this.points = []
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.radius = Math.max(this.width, this.height)
      this.center = new ns.point(this.width / 2, this.height / 2)

      this.a0 = Math.random() * Math.PI * 2
      this.a1 = Math.random() * Math.PI * 2
      this.a2 = Math.random() * Math.PI * 2

      let mul = 1 + Math.random() * 2
      mul = Math.random() > 0.5 ? mul * 5 : mul / 2

      this.s0 = (Math.random() - 0.5) * (mul / 360) * Math.PI
      this.s1 = (Math.random() - 0.5) * (mul / 300) * Math.PI
      this.s2 = (Math.random() - 0.5) * (mul / 300) * Math.PI
    },
    compute(ctx) {
      this.a0 += this.s0
      this.a1 += this.s1
      this.a2 += this.s2

      const c = Math.cos(this.a0) * Math.cos(this.a1) * Math.cos(this.a2)
      const s = Math.sin(this.a0) * Math.sin(this.a1) * Math.sin(this.a2)
      this.points.push(new ns.point(this.center.x + c * this.radius, this.center.y + s * this.radius))

      if (this.points.length > 20) this.points.shift()

      this.stroke.anchors = this.points
      this.stroke.draw(ctx)

      const t = 0.5 + Math.sin(Date.now() * 0.001) * 0.5
      this.stroke.color = this.colors[Math.floor(t * this.colors.length)]
      this.stroke.width = 25 + (1 - t) * 50
      this.stroke.strokeCount = 5
    }
  }

  function reset() {
    ctx.fillStyle = '#202020'
    ctx.fillRect(0, 0, c.width, c.height)
    trails.forEach(trail => trail.reset())
  }

  function compute() {
    trails.forEach(trail => trail.compute(ctx))
  }

  function initCanvas() {
    c.width = window.innerWidth
    c.height = window.innerHeight

    trails.push(new ns.trailer([
      0xb3e5ff, // 밝은 스카이블루
      0x4fa8ff, // 중간 블루
      0x4754ff, // 인디고 블루
      0x7c4dff, // 블루+퍼플 중간톤
      0x995577, // 퍼플 브라운 (중간 연결)
      0xa65a42, // 브릭 브라운
      0xcc4433  // 브라운 레드 (레드 계열 마무리)
    ]))
    trails.push(new ns.trailer([
      0xfceabb, // 연금색
      0xf8d37a, // 라이트 골드
      0xe0b057, // 머스터드 골드
      0xc2883d, // 진한 골드브라운
      0xcc4433  // 브라운 레드 (레드 계열 마무리)
    ]))
    trails.push(new ns.trailer([
      0x4fa8ff, // 중간 블루
      0xb3e5ff, // 밝은 스카이블루
      0xffc0cb, // 연핑크 (soft red 시작)
      0xff9999, // 연한 레드
      0xffb347, // 살구빛 오렌지
    ]))

    reset()
    function animate() {
      compute()
      requestAnimationFrame(animate)
    }
    animate()
  }

  initCanvas()
  window.addEventListener('resize', reset)
  c.addEventListener('mousedown', reset)
})
</script>

<style scoped>
.trail-canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
}
</style>