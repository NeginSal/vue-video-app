<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand fs-3 d-block d-lg-none" href="#"><i class="bi bi-claude"></i> فیلم ترسناک </a>
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
    <ul class="nav nav-pills ">
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
    </ul>
  </nav>
</template>

<script setup>
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
