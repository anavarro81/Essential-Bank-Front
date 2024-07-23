package com.plat_bancaria.plataforma.Controller;

import com.plat_bancaria.plataforma.Model.Log;
import com.plat_bancaria.plataforma.Model.User;
import com.plat_bancaria.plataforma.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        try {
            userService.saveUser(user);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyAccount(@RequestParam String email, @RequestParam String token) {
        try {
            if (userService.verifyUser(email, token)) {
                return ResponseEntity.ok("Cuenta verificada. Puedes iniciar sesión.");
            } else {
                throw new Exception("Error al verificar cuenta");
            }
        } catch (Exception e) {
            ArrayList<String> errors = new ArrayList<>();
            errors.add(email);
            errors.add(token);
            //Guardar lot en base de datos
            Log log = new Log();
            log.setMessage(e.getMessage());
            log.setFile(e.getClass().getName());
            log.setLine(e.getClass().getName());
            log.setRequest(errors.toString());
            return ResponseEntity.badRequest().body(e.getMessage());

        }
    }

    @PostMapping("/set-password")
    public ResponseEntity<String> setPassword(@RequestBody Map<String, String> payload) {
        try {
            String email = payload.get("email");
            String password = payload.get("password");

            if (userService.setPassword(email, password)) {
                return ResponseEntity.ok("Contraseña establecida exitosamente.");
            } else {
                return ResponseEntity.badRequest().body("Error al establecer la contraseña.");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al procesar la solicitud.");
        }
    }


    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestParam String email, @RequestParam String password) {
        logger.info("Intentando iniciar sesión con email: {}", email);

        Optional<User> user = userService.findUserByEmail(email);

        if (user.isPresent()) {
            logger.info("Usuario encontrado con email: {}", email);
            if (user.get().getPassword().equals(password)) {
                logger.info("Contraseña correcta para el usuario: {}", email);
                return ResponseEntity.ok(user.get());
            } else {
                logger.warn("Contraseña incorrecta para el usuario: {}", email);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        } else {
            logger.warn("Usuario no encontrado con email: {}", email);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
