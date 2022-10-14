<template>
    <div class="maridos-admin">
        <h1></h1>
        <section class="section-husband-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-default shape-skew-husband alpha-4">

            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <!-- Tabs with icons -->
                        <div class="mb-3">
                            <h2 class="text-uppercase font-weight-bold">Panel de administración de Maridos</h2>
                        </div>
                        <tabs fill class="flex-column flex-md-row">
                            <card shadow slot-scope="{activeTabIndex}">
                                <tab-pane key="tab1">
                                    <template slot="title">
                                        <i class="ni ni-circle-08 mr-2"></i>Maridos
                                    </template>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="card">
                                                <div class="card-header">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <badge
                                                                style="background-color: rgb(203, 129, 180); color: #FFFFFF;"
                                                                type="success" rounded>Plomería</badge>
                                                            <badge
                                                                style="background-color: rgb(203, 129, 180); color: #FFFFFF;"
                                                                type="success" rounded>Carpintería</badge>
                                                            <badge
                                                                style="background-color: rgb(203, 129, 180); color: #FFFFFF;"
                                                                type="success" rounded>Electrodomésticos</badge>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <h5 class="card-title">Soy un Marido</h5>
                                                            <p class="card-text">marido@udemedellin.co</p>
                                                            <p class="card-text">+57 3002223322</p>
                                                            <span>Esta es la descripción de lo que hago :)</span>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
                                                                <img v-lazy="'img/theme/jose.jpeg'" alt="Raised image"
                                                                    class="img-fluid rounded shadow-lg"
                                                                    style="max-width: 180px; max-height: 180px;">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br>
                                                    <base-button type="light" size="sm">Editar</base-button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="card">
                                                <div class="card-header">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <badge
                                                                style="background-color: rgb(185, 160, 244); color: #FFFFFF;"
                                                                type="success" rounded>Tecnología</badge>
                                                            <badge
                                                                style="background-color: rgb(185, 160, 244); color: #FFFFFF;"
                                                                type="success" rounded>Madera</badge>
                                                            <badge
                                                                style="background-color: rgb(185, 160, 244); color: #FFFFFF;"
                                                                type="success" rounded>Pintura</badge>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <h5 class="card-title">Soy una Marida</h5>
                                                            <p class="card-text">marida@udemedellin.co</p>
                                                            <p class="card-text">+57 3002221111</p>
                                                            <span>Esta es la descripción de lo que hago :)</span>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
                                                                <img v-lazy="'img/theme/paulina.jpeg'" alt="Raised image"
                                                                    class="img-fluid rounded shadow-lg"
                                                                    style="max-width: 180px; max-height: 180px;">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br>
                                                    <base-button type="light" size="sm">Editar</base-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </tab-pane>
                                <tab-pane key="tab2">
                                    <template slot="title">
                                        <i class="ni ni-collection mr-2"></i>Crear Marido
                                    </template>
                                    <div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <base-input placeholder="Nombre"></base-input>
                                            </div>
                                            <div class="col-md-6">
                                                <base-input placeholder="email@dominio.com"></base-input>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <base-input placeholder="Número de teléfono"></base-input>
                                            </div>
                                            <div class="col-md-6">
                                                <select class="form-control">
                                                    <option>Categorías</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                                    placeholder="Descripción"></textarea>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="row justify-content-center">
                                            <div class="col-md-12">
                                                <base-button type="primary" icon="ni ni-cloud-download-95">Crear
                                                </base-button>
                                            </div>
                                        </div>
                                    </div>
                                </tab-pane>
                                <!-- 
                                <tab-pane key="tab3">
                                    <template slot="title">
                                        <i class="ni ni-calendar-grid-58 mr-2"></i>Messages
                                    </template>

                                    <p class="description">Raw denim you probably haven't heard of them jean shorts
                                        Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache
                                        cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
                                        keffiyeh dreamcatcher synth.</p>
                                </tab-pane> -->
                            </card>
                        </tabs>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
export default {
    components: {
        Tabs,
        TabPane
    }
};
</script>
<style>

</style>
