<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);
if (!$data) {
    echo json_encode(["status" => "error", "message" => "데이터를 받지 못했습니다."]);
    exit;
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$message = $data['message'] ?? '';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.naver.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = '내아이디@naver.com';   // ✨ 네이버 이메일 주소
    $mail->Password   = '앱 비밀번호';           // ✨ 네이버 앱 비밀번호 (로그인용 X)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8'; 
    $mail->setFrom('내아이디@naver.com', 'Portfolio Contact');
    $mail->addAddress('내아이디@naver.com', '관리자');

    if (!empty($email)) {
        $mail->addReplyTo($email, $name);
    }
    $mail->isHTML(true);
    $mail->Subject = '포트폴리오에서 새 문의가 도착했습니다';
    $mail->Body = "
        <strong>이름:</strong> {$name} <br>
        <strong>이메일:</strong> {$email} <br>
        <strong>전화번호:</strong> {$phone} <br><br>
        <strong>메시지:</strong><br>" . nl2br($message);
    $mail->send();
    echo json_encode(["status" => "success", "message" => "메일이 전송되었습니다."]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "메일 전송 실패: {$mail->ErrorInfo}"]);
}