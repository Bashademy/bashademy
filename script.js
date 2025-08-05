// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      })
    })
  }

  // Sticky Navigation
  const navbar = document.getElementById("navbar")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 100) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }

    lastScrollTop = scrollTop
  })

  // Smooth Scrolling for Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Fade In Animation on Scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".service-card, .testimonial-card, .value-card, .team-member, .faq-item",
  )
  animateElements.forEach((el) => {
    observer.observe(el)
  })

  // Contact Form Validation and Submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Clear previous errors
      clearErrors()

      // Get form data
      const formData = new FormData(contactForm)
      const name = formData.get("name").trim()
      const email = formData.get("email").trim()
      const message = formData.get("message").trim()

      let isValid = true

      // Validate name
      if (!name) {
        showError("name-error", "Name is required")
        isValid = false
      } else if (name.length < 2) {
        showError("name-error", "Name must be at least 2 characters")
        isValid = false
      }

      // Validate email
      if (!email) {
        showError("email-error", "Email is required")
        isValid = false
      } else if (!isValidEmail(email)) {
        showError("email-error", "Please enter a valid email address")
        isValid = false
      }

      // Validate message
      if (!message) {
        showError("message-error", "Message is required")
        isValid = false
      } else if (message.length < 10) {
        showError("message-error", "Message must be at least 10 characters")
        isValid = false
      }

      // If form is valid, show success message
      if (isValid) {
        showSuccessMessage()
        contactForm.reset()
      }
    })
  }

  // Form validation helper functions
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId)
    if (errorElement) {
      errorElement.textContent = message
      errorElement.style.display = "block"
    }
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll(".error-message")
    errorElements.forEach((element) => {
      element.textContent = ""
      element.style.display = "none"
    })
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  function showSuccessMessage() {
    const successElement = document.getElementById("form-success")
    if (successElement) {
      successElement.classList.add("show")

      // Hide success message after 5 seconds
      setTimeout(() => {
        successElement.classList.remove("show")
      }, 5000)
    }
  }

  // Add hover effects to buttons
  const buttons = document.querySelectorAll(".cta-button, .secondary-button")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Parallax effect for hero section
  const hero = document.querySelector(".hero")
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      hero.style.transform = `translateY(${rate}px)`
    })
  }

  // Counter animation for stats
  const stats = document.querySelectorAll(".stat h3")
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          statsObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  stats.forEach((stat) => {
    statsObserver.observe(stat)
  })

  function animateCounter(element) {
    const target = Number.parseInt(element.textContent)
    const increment = target / 50
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        element.textContent = target + (element.textContent.includes("%") ? "%" : "+")
        clearInterval(timer)
      } else {
        element.textContent = Math.floor(current) + (element.textContent.includes("%") ? "%" : "+")
      }
    }, 40)
  }

  // Loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")
  })

  // Add active class to current page navigation
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (
      link.getAttribute("href") === currentPage ||
      (currentPage === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active")
    }
  })
})

// Utility function for debouncing scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
  // Add any additional scroll-based functionality here
}, 10)

window.addEventListener("scroll", optimizedScrollHandler)
