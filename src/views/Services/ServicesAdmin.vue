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
            <!-- Tabs -->
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
                            <th scope="col">Opciones</th>
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
                            <td>
                              <base-button
                                size="sm"
                                type="warning"
                                class="mb-3"
                                @click="
                                  editItem(item);
                                  modals.modal1 = true;
                                "
                              >
                                Finalizar
                              </base-button>
                              <modal
                                :show.sync="modals.modal1"
                                gradient="danger"
                                modal-classes="modal-danger modal-dialog-centered"
                              >
                                <h6
                                  slot="header"
                                  class="modal-title"
                                  id="modal-title-notification"
                                >
                                  ¡Atención!
                                </h6>

                                <div class="py-3 text-center">
                                  <i class="ni ni-bell-55 ni-3x"></i>
                                  <h4 class="heading mt-4">
                                    ¿Está seguro de que desea modificar este
                                    servicio?
                                  </h4>
                                  <p>Esta acción no se puede revertir</p>
                                </div>

                                <template slot="footer">
                                  <base-button
                                    type="white"
                                    @click="updateService"
                                    >Finalizar servicio</base-button
                                  >
                                  <base-button
                                    type="link"
                                    text-color="white"
                                    class="ml-auto"
                                    @click="modals.modal1 = false"
                                  >
                                    Cerrar
                                  </base-button>
                                </template>
                              </modal>
                            </td>
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
import Modal from "@/components/Modal.vue";

const Swal = require("sweetalert2");

export default {
  components: {
    Tabs,
    TabPane,
    Modal,
  },

  data: () => ({
    modals: {
      modal1: false,
    },
    editedIndex: -1,
    editedItem: {},
    services: [],
    activeServices: [],
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
          this.activeServices.push(element);
        }
      });
      this.services = services;
    },

    editItem(item) {
      this.editedIndex = this.services.indexOf(item);
      this.editedItem = { ...item };
    },

    updateService() {
      if (this.editedIndex > -1) {
        let data = {
          isActive: false,
        };
        axios
          .put(
            "https://us-central1-api-fb-3b0eb.cloudfunctions.net/app/api/services/isActive/" +
              this.editedItem.id,
            data
          )
          .then((dataResponse) => {
            if (dataResponse.status == 200) {
              this.getServices();
              Swal.fire({
                icon: "success",
                title: "¡Bien hecho!",
                text: "Servicio finalizado correctamente",
              });
              this.modals.modal1 = false;
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ocurrió un error",
              });
            }
          })
          .catch((error) => {
            console.log(error.response);
          });
      } else {
        this.services.push(this.editedItem);
      }
    },
  },
};
</script>
<style>
</style>
