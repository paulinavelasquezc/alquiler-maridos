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
                Panel de administración de Maridos
              </h2>
            </div>
            <tabs fill class="flex-column flex-md-row">
              <card>
                <tab-pane key="tab1">
                  <template slot="title">
                    <i class="ni ni-circle-08 mr-2"></i>Maridos
                  </template>
                  <div>
                    <div class="row">
                      <div
                        class="col-lg-6"
                        v-for="item in husbands"
                        :key="item.id"
                      >
                        <br />
                        <div class="card">
                          <div class="card-header">
                            <div class="row">
                              <div
                                class="col-lg-3"
                                v-for="category in item.categories"
                                :key="category.id"
                              >
                                <badge
                                  :style="{
                                    'background-color': category.color,
                                  }"
                                  style="color: #ffffff"
                                  type="success"
                                  rounded
                                  >{{ category.name }}</badge
                                >
                              </div>
                            </div>
                          </div>
                          <div class="card-body">
                            <div class="row">
                              <div class="col-lg-6">
                                <h5 class="card-title">{{ item.name }}</h5>
                                <p class="card-text">{{ item.email }}</p>
                                <p class="card-text">{{ item.phoneNumber }}</p>
                                <span>{{ item.description }}</span>
                              </div>
                              <div class="col-lg-6">
                                <div class="col-sm-3 col-6 mt-5 mt-sm-0">
                                  <img
                                    v-lazy="'img/theme/user.png'"
                                    alt="Raised image"
                                    class="img-fluid rounded"
                                    style="max-width: 180px; max-height: 180px"
                                  />
                                </div>
                              </div>
                            </div>
                            <br />
                            <base-button
                              size="sm"
                              type="light"
                              class="mb-3"
                              @click="
                                modals.modal1 = true;
                                editItem(item);
                              "
                            >
                              Editar
                            </base-button>
                            <modal :show.sync="modals.modal1">
                              <h6
                                slot="header"
                                class="modal-title"
                                id="modal-title-default"
                              >
                                Editar Marido
                              </h6>

                              <div class="row">
                                <div class="col-md-6">
                                  <base-input
                                    id="name"
                                    placeholder="Nombre"
                                    v-model="editedItem.name"
                                    required
                                  ></base-input>
                                </div>
                                <div class="col-md-6">
                                  <base-input
                                    id="number"
                                    placeholder="Número de teléfono"
                                    v-model="editedItem.phoneNumber"
                                    required
                                  ></base-input>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6">
                                  <textarea
                                    id="description"
                                    class="form-control"
                                    v-model="editedItem.description"
                                    rows="3"
                                    placeholder="Descripción"
                                    required
                                  ></textarea>
                                </div>
                                <!-- <div class="col-md-6">
                                  <select
                                    class="form-control"
                                    :items="categories"
                                    Label="Categorías"
                                    item-text="name"
                                    item-value="id"
                                  >
                                  </select>
                                </div> -->
                              </div>
                              <template slot="footer">
                                <base-button
                                  type="primary"
                                  @click="updateHusband"
                                  >Guardar</base-button
                                >
                                <base-button
                                  type="link"
                                  class="ml-auto"
                                  @click="modals.modal1 = false"
                                  >Cerrar
                                </base-button>
                              </template>
                            </modal>
                          </div>
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
                        <base-input
                          id="name"
                          placeholder="Nombre"
                          v-model="name"
                          required
                        ></base-input>
                      </div>
                      <div class="col-md-6">
                        <base-input
                          id="email"
                          v-model="email"
                          placeholder="email@dominio.com"
                          required
                        ></base-input>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <base-input
                          id="number"
                          placeholder="Número de teléfono"
                          v-model="phoneNumber"
                          required
                        ></base-input>
                      </div>
                      <div class="col-md-6">
                        <select class="form-control" v-model="category">
                          <option v-for="item in categories" :key="item.id">
                            {{ item.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <textarea
                          id="description"
                          class="form-control"
                          v-model="description"
                          rows="3"
                          placeholder="Descripción"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <br />
                    <div class="row justify-content-center">
                      <div class="col-md-12">
                        <base-button
                          type="primary"
                          icon="ni ni-cloud-download-95"
                          @click="createHusband"
                          >Crear
                        </base-button>
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
import Modal from "@/components/Modal.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import fromIdCategory from "../../util/husbandMapper.js";

const Swal = require("sweetalert2");

export default {
  beforeMount() {
    this.getCategories();
  },
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
    husbands: [],
    categories: [],
    name: "",
    phoneNumber: "",
    email: "",
    description: "",
    category: "",
  }),

  created() {
    this.getHusbands();
  },

  methods: {
    getCategories() {
      axios
        .get(
          "https://us-central1-api-fb-3b0eb.cloudfunctions.net/app/api/categories/"
        )
        .then((response) => this.setDataCategories(response.data));
    },

    setDataCategories(categories) {
      categories.forEach((element) => {
        this.categories.push({ id: element.id, name: element.name });
      });
    },

    getHusbands() {
      axios
        .get(
          "https://us-central1-api-fb-3b0eb.cloudfunctions.net/app/api/husbands/"
        )
        .then((response) => this.setDataHusbands(response.data));
    },

    setDataHusbands(husbands) {
      this.husbands = husbands;
      husbands.forEach((husband) => {
        husband.categories = husband.idCategories.map(function (idCode) {
          return fromIdCategory(idCode);
        });
      });
    },

    createHusband() {
      // let categoriesHusband = []
      // categoriesHusband.push(this.categories.id)
      let data = {
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        idCategories: ["1030"],
        description: this.description,
      };
      axios
        .post(
          "https://us-central1-api-fb-3b0eb.cloudfunctions.net/app/api/husbands/",
          data
        )
        .then((data) => {
          if (data.status == 200) {
            this.getHusbands();
            Swal.fire({
              icon: "success",
              title: "¡Bien hecho!",
              text: "Marido creado correctamente",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Ocurrió un error",
            });
          }
        });
    },

    editItem(item) {
      this.editedIndex = this.husbands.indexOf(item);
      this.editedItem = { ...item };
    },

    updateHusband() {
      if (this.editedIndex > -1) {
        let data = {
          id: this.editedItem.id,
          name: this.editedItem.name,
          email: this.editedItem.email,
          phoneNumber: this.editedItem.phoneNumber,
          idCategories: ["1030"],
          description: this.editedItem.description,
        };
        axios
          .put(
            "https://us-central1-api-fb-3b0eb.cloudfunctions.net/app/api/husbands/",
            data
          )
          .then((dataResponse) => {
            if (dataResponse.status == 200) {
              this.getHusbands();
              Swal.fire({
                icon: "success",
                title: "¡Bien hecho!",
                text: "Marido actualizado correctamente",
              });
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
        this.husbands.push(this.editedItem);
      }
    },
  },
};
</script>
<style>
</style>
