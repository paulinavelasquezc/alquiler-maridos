<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/white.png" alt="logo" />
      </router-link>
      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <!-- <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Components</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Getting started</h6>
                                <p class="description d-none d-md-inline-block mb-0">Get started with Bootstrap, the
                                    world's most popular framework for building responsive sites.</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Components</h5>
                                <p class="description d-none d-md-inline-block mb-0">Learn how to use Argon
                                    compiling Scss, change brand colors and more.</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown> -->
        <base-dropdown tag="li" class="nav-item">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">Examples</span>
          </a>
          <router-link to="/landing" class="dropdown-item"
            >Componentes</router-link
          >
          <!-- <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/login" class="dropdown-item">Login</router-link>
                    <router-link to="/register" class="dropdown-item">Register</router-link> -->
        </base-dropdown>
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
            role="button"
          >
            <i class="ni ni-ui-04 d-lg-none"></i>
            <span class="nav-link-inner--text">Administración</span>
          </a>
          <div class="dropdown-menu-inner">
            <router-link to="/login" class="media d-flex align-items-center">
              <div
                class="
                  icon icon-shape
                  bg-gradient-info
                  rounded-circle
                  text-white
                "
              >
                <i class="ni ni-key-25"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="text-primary mb-md-1">Iniciar sesión</h6>
              </div>
            </router-link>
            <router-link to="/maridos" class="media d-flex align-items-center">
              <div
                class="
                  icon icon-shape
                  bg-gradient-primary
                  rounded-circle
                  text-white
                "
              >
                <i class="ni ni-single-02"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="text-primary mb-md-1">Maridos</h6>
              </div>
            </router-link>
            <router-link to="/services" class="media d-flex align-items-center">
              <div
                class="
                  icon icon-shape
                  bg-gradient-light
                  rounded-circle
                  text-white
                "
              >
                <i class="ni ni-book-bookmark"></i>
              </div>
              <div class="media-body ml-3">
                <h6 class="text-primary mb-md-1">Servicios</h6>
              </div>
            </router-link>
          </div>
        </base-dropdown>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
};
</script>
<style>
</style>
