package com.plat_bancaria.plataforma.Domain;

public record EmailDTO (
    String to,
    String subject,
    String message
){
}
