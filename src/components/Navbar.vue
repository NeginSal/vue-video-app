<template>
  <nav class="navbar navbar-expand-lg fixed-top px-3">
    <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand fs-2 d-block d-lg-none" href="#"><i class="bi bi-claude"></i> فیلم ترسناک </a>
    <div class="dropdown d-lg-none">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i class="bi bi-bell"></i>
      </button>
      <ul class="dropdown-menu bg-dark text-center dropdown-menu-end">
        <li class="border-bottom"><button class="dropdown-item" type="button"><i
              class="bi bi-chat-square-dots fs-3"></i></button></li>
        <li class="border-bottom"><button class="dropdown-item" type="button"><i class="bi bi-search fs-3"></i></button>
        </li>
        <li class="border-bottom"><button class="dropdown-item" type="button"></button><i
            class="bi bi-person-circle fs-3"></i></li>
        <li class="border-bottom"><button class="dropdown-item" type="button"></button><i
            class="bi bi-box-arrow-left fs-3 fw-bolder"></i></li>
      </ul>
    </div>
    <div class="collapse navbar-collapse px-3" id="navbarTogglerDemo01">
      <a class="navbar-brand d-none d-lg-block fs-4" href="#"> <i class="bi bi-claude"></i> فیلم ترسناک </a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">دسته‌بندی</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">فیلم</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">سریال</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">جدیدترین دوبله</a>
        </li>
      </ul>
    </div>
    <ul class="nav nav-pills d-none d-lg-flex">
      <li class="nav-item mx-1 bg-dark rounded-2">
        <a class="nav-link" href="#"><i class="bi bi-bell"></i></a>
      </li>
      <li class="nav-item mx-1 bg-dark rounded-2">
        <a class="nav-link" href="#"><i class="bi bi-chat-square-dots"></i></a>
      </li>
      <li class="nav-item mx-1 bg-dark rounded-2">
        <a class="nav-link" href="#"><i class="bi bi-search"></i></a>
      </li>
      <li class="nav-item mx-1 bg-dark rounded-2">
        <a class="nav-link" href="#"><i class="bi bi-person-circle"></i></a>
      </li>
      <li class="nav-item mx-1 bg-danger rounded-2">
        <a class="nav-link" href="#" @click="logout"><i class="bi bi-box-arrow-left fw-bolder"></i></a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style scoped>
.navbar {
  background-color: #414142;
}

.navbar .nav-link,
.navbar .navbar-brand {
  color: white !important;
}

.navbar .bi {
  color: white;
}

.nav-pills .nav-link {
  color: #414142 !important;
}
</style>
