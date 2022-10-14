<template>
    <footer class="footer ">
        <div class="container">
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; {{year}}
                        <a href="#" target="_blank" rel="noopener">InnovaTech</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="#" class="nav-link" target="_blank" rel="noopener">InnovaTech</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" target="_blank" rel="noopener">Sobre nosotros</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>