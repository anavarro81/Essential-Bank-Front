package com.plat_bancaria.plataforma.Service;
import com.plat_bancaria.plataforma.Model.User;
import com.plat_bancaria.plataforma.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User findUserByEmail(String email) {
        return userRepository.findByUserEmail(email);
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
