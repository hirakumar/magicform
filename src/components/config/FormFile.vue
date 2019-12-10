<template>

    <b-card title="Form File">
        <b-button variant="link" size="md" class="trash" @click="remove">
            <font-awesome-icon :icon="['fas','trash-alt']" />
        </b-button>
        <b-list-group flush>
            <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Placeholder : " label-cols="6" class="mb-0">
                    <b-input v-model="placeholder" size="sm" />
                </b-form-group>
            </b-list-group-item>

            <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Drop Placeholder : " label-cols="6" class="mb-0">
                    <b-input v-model="dropPlaceholder" size="sm" />
                </b-form-group>
            </b-list-group-item>

            <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Name : " label-cols="6" class="mb-0">
                    <b-input v-model="name" size="sm" />
                </b-form-group>
            </b-list-group-item>

            <template v-if="expandlevel>0">
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Accept : " label-cols="6" class="mb-0">
                        <b-input v-model="accept" size="sm" />
                    </b-form-group>
                </b-list-group-item>
                
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="ID : " label-cols="6" class="mb-0">
                        <b-input v-model="id" size="sm" />
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Class : " label-cols="6" class="mb-0">
                        <b-input v-model="classname" size="sm" />
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Disabled : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="disabled" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Required : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="required" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Size : " label-cols="6" class="mb-0">
                        <b-select v-model="size" size="sm" :options="sizeOptions" />
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Multiple  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="multiple" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Plain  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="plain" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Directory  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="directory" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Browse Text  : " label-cols="6" class="mb-0">
                        <b-input v-model="browseText" size="sm" />
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Capture  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="capture" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="No Traverse  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="noTraverse" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="No Drop  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="noDrop" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

            </template>
        </b-list-group>
        <div class="float-right">
            <b-button size="sm" variant="secondary" @click="increaselevel" v-if="expandlevel<1">
                <font-awesome-icon :icon="['fas','chevron-down']" />
            </b-button>
            <b-button size="sm" variant="secondary" @click="decreaselevel" v-if="expandlevel>0">
                <font-awesome-icon :icon="['fas','chevron-up']" />
            </b-button>
        </div>
    </b-card>

</template>
<script>
export default {
    name: 'ConfigFormFile',
    props: {
        data: Number
    },
    data: function() {
        return {
            expandlevel: 0,

            sizeOptions: [{
                    text: 'None',
                    value: false
                },
                {
                    text: 'Small',
                    value: 'sm'
                },
                {
                    text: 'Medium',
                    value: 'md'
                },
                {
                    text: 'Large',
                    value: 'lg'
                },
            ],
        }
    },
    computed: {
        eno: {
            get() {
                return this.data;
            }
        },

        eleObj: {
            get() {
                return this.$store.getters.getObj(this.eno);
            },
            set(val) {
                return val;
            }
        },

        id: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.id;
                }

            },
            set(val) {
                console.log("ID");
                this.$store.commit('editObj', {
                    id: val
                })
            }
        },
        name: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.name;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    name: val
                })
            }
        },
        placeholder: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.placeholder;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    placeholder: val
                })
            }
        },
        accept: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.accept;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    accept: val
                })
            }
        },
        dropPlaceholder: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj['drop-placeholder'];
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    'drop-placeholder': val
                })
            }
        },

        classname: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.class;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    class: val
                })
            }
        },
        multiple: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.multiple;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    multiple: val
                })
            }
        },
        disabled: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.disabled;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    disabled: val
                })
            }
        },
        required: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.required;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    required: val
                })
            }
        },
        size: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.size;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    size: val
                })
            }
        },

        plain: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.plain;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    plain: val
                })
            }
        },
        capture: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.capture;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    capture: val
                })
            }
        },
        browseText: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj['browse-text'];
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    'browse-text': val
                })
            }
        },
        directory: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.directory;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    directory: val
                })
            }
        },
        noTraverse: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj['no-traverse '];
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    'no-traverse': val
                })
            }
        },
        noDrop: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj['no-drop'];
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    'no-drop': val
                })
            }
        },

    },
    methods: {
        increaselevel: function() {
            try {
                this.expandlevel += 1;
            } catch (err) {
                console.log("Error on increaselevel :", err)
            }

        },
        decreaselevel: function() {
            try {
                this.expandlevel -= 1;
            } catch (err) {
                console.log("Error on decreaselevel :", err)
            }
        },
        remove: function() {
            this.$store.dispatch("removeObj");
        },

    }
}
</script>