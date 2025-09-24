<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

// Vue에서 axios.post로 전달된 JSON 데이터를 받기
$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$message = $data['message'] ?? '';

$mail = new PHPMailer(true);

try {
    // SMTP 서버 설정 (네이버 전용)
    $mail->isSMTP();
    $mail->Host       = 'smtp.naver.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = '내아이디@naver.com';   // 네이버 이메일 주소
    $mail->Password   = '앱 비밀번호';          // 네이버 계정 비번 또는 앱 비밀번호
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // 보내는 사람 (네이버 SMTP 계정과 동일해야 함)
    $mail->setFrom('내아이디@naver.com', 'Portfolio Contact');

    // 받는 사람 (본인 계정으로만 수신)
    $mail->addAddress('내아이디@naver.com', '관리자');

    // 방문자가 남긴 이메일을 "답장 주소"로 지정
    if (!empty($email)) {
        $mail->addReplyTo($email, $name);
    }

    // 메일 내용 작성
    $mail->isHTML(true);
    $mail->Subject = '포트폴리오에서 새 문의가 도착했습니다';
    $mail->Body    = "
        <strong>이름:</strong> {$name} <br>
        <strong>이메일:</strong> {$email} <br>
        <strong>메시지:</strong><br>" . nl2br($message);

    // 메일 전송
    $mail->send();
    echo json_encode(["status" => "success", "message" => "메일이 전송되었습니다."]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "메일 전송 실패: {$mail->ErrorInfo}"]);
}