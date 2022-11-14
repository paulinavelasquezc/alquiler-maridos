<template>
  <div class="maridos-admin">
    <section class="section-husband-cover section-shaped my-0">
      <div
        class="shape shape-style-1 shape-default shape-skew-husband alpha-4"
      ></div>
    </section>
    <section class="section section-skew">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <!-- Tabs with icons -->
            <div class="mb-3">
              <h2 class="text-uppercase font-weight-bold">
                Panel de administración de Servicios
              </h2>
            </div>
            <tabs fill class="flex-column flex-md-row">
              <card>
                <tab-pane key="tab1">
                  <template slot="title">
                    <i class="ni ni-time-alarm mr-2"></i>Servicios activos
                  </template>
                  <div>
                    <div class="table-responsive table-hover">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Marido</th>
                            <th scope="col">Ubicación</th>
                            <th scope="col">Fecha de atención</th>
                            <th scope="col">Hora de atención</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Detalles</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in activeServices" :key="item.id">
                            <th scope="row">
                              <badge
                                style="
                                  color: #ffffff;
                                  background-color: #cb81b4;
                                "
                                type="success"
                                rounded
                                >{{ item.id }}</badge
                              >
                            </th>
                            <td>{{ item.idCustomer }}</td>
                            <td>{{ item.idHusband }}</td>
                            <td>{{ item.address }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ item.time }}</td>
                            <td>{{ item.creationDate }}</td>
                            <td>{{ item.details }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </tab-pane>
                <tab-pane key="tab2">
                  <template slot="title">
                    <i class="ni ni-calendar-grid-58 mr-2"></i>Historial
                  </template>
                  <div>
                    <div>
                      <div class="table-responsive table-hover">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Cliente</th>
                              <th scope="col">Marido</th>
                              <th scope="col">Ubicación</th>
                              <th scope="col">Fecha de atención</th>
                              <th scope="col">Hora de atención</th>
                              <th scope="col">Fecha de creación</th>
                              <th scope="col">Detalles</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in services" :key="item.id">
                              <th scope="row">
                                <badge
                                  style="
                                    color: #ffffff;
                                    background-color: #b9a0f4;
                                  "
                                  type="success"
                                  rounded
                                  >{{ item.id }}</badge
                                >
                              </th>
                              <td>{{ item.idCustomer }}</td>
                              <td>{{ item.idHusband }}</td>
                              <td>{{ item.address }}</td>
                              <td>{{ item.date }}</td>
                              <td>{{ item.time }}</td>
                              <td>{{ item.creationDate }}</td>
                              <td>{{ item.details }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </tab-pane>
              </card>
            </tabs>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";

export default {
  components: {
    Tabs,
    TabPane,
  },

  data: () => ({
    modals: {
      modal1: false,
    },
    editedIndex: -1,
    editedItem: {},
    services: [],
    activeServices: []
  }),

  created() {
    this.getServices();
  },

  methods: {
    getServices() {
      axios
        .get(
          "https://us-central1-api-fb-3b0eb.cloudfunctions.net/app/api/services/"
        )
        .then((response) => this.setDataServices(response.data));
    },
    setDataServices(services) {
      services.forEach((element) => {
        if (element.isActive == true) {
            this.activeServices.push(element)
        }
      });
      this.services = services;
    },
  },
};
</script>
<style>
</style>
