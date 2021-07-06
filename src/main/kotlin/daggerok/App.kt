package com.gearsofleo.platform.aux.affiliate.service

// tag::my-code-snippet
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class Application

fun main(args: Array<String>) {
    runApplication<Application>(*args) {
        setRegisterShutdownHook(true)
    }
}
// end::my-code-snippet
