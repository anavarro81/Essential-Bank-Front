package com.plat_bancaria.plataforma.Controller;

import com.plat_bancaria.plataforma.Domain.EmailDTO;
import com.plat_bancaria.plataforma.Service.IEmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/v1")
@RequiredArgsConstructor
public class EmailController {

    private final IEmailService emailService;


    @PostMapping("/sendMessage")
    public ResponseEntity<?> receiveRequestEmail(@RequestBody EmailDTO emailDTO) {
        System.out.println("Mensaje recibido: " + emailDTO);
        emailService.sendEmail(emailDTO.to(), emailDTO.subject(), emailDTO.message());

        Map<String, String> response = new HashMap<>();
        response.put("estado", "Enviado");

        return ResponseEntity.ok(response);
    }

}
