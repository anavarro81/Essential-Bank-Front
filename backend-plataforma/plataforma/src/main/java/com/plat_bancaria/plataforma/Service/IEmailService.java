package com.plat_bancaria.plataforma.Service;

public interface IEmailService {

    void sendEmail(String to, String subject, String message);

    void sendEmailWithFile(String to, String subject, String message, String File);

}
