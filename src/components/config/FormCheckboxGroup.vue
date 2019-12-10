<template>
    <b-card title="Form Checkbox Group" v-if="hasObj">
        <b-button variant="link" size="md" class="trash" @click="remove">
            <font-awesome-icon :icon="['fas','trash-alt']" />
        </b-button>
        <b-list-group flush>
            <b-list-group-item class="pl-0 pr-0">
                <!-- Label -->
                <b-form-group label="Fill Data from : " label-for="label" label-cols="6" class="mb-0">
                </b-form-group>
                <b-row>
                    <b-col cols="10">
                        <b-row>
                            <b-col cols="12">
                                <b-input placeholder="Text" v-model="text" @keyup="changeVal" />
                            </b-col>
                            <b-col cols="2"><small>Value :</small></b-col>
                            <b-col cols="10">
                                <b-input placeholder="Value" v-model="value" size="sm" :readonly="showFalse" :plaintext="showTrue" /></b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="2">
                        <b-button size="sm" @click="addOption">
                            <font-awesome-icon :icon="['fas','plus']" /> </b-button>
                    </b-col>
                </b-row>
                <template v-if="hasOptions">
                    <b-row v-for="(opt,index) in options">
                        <b-col cols="1"> {{index+1}}. </b-col>
                        <b-col cols="9">
                            <b-input type="text" :value="opt.text" size="sm" :data-index="index" @keyup="changeText" />
                            <b-input type="text" :value="opt.value" size="sm" :data-index="index" @keyup="changeValue" />
                        </b-col>
                        <b-col cols="2">
                            <b-button size="sm" @click="removeOption(index)">
                                <font-awesome-icon :icon="['fas','trash-alt']" /> </b-button>
                        </b-col>
                    </b-row>
                </template>
            </b-list-group-item>
            <!-- Name -->
            <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Name : " label-cols="6" class="mb-0">
                    <b-input v-model="name" size="sm" />
                </b-form-group>
            </b-list-group-item>
            <template v-if="expandlevel>0">
                <!-- ID -->
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="ID : " label-cols="6" class="mb-0">
                        <b-input v-model="id" size="sm" />
                    </b-form-group>
                </b-list-group-item>
                <!-- Class -->
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Class : " label-cols="6" class="mb-0">
                        <b-input v-model="classname" size="sm" />
                    </b-form-group>
                </b-list-group-item>

                <!-- disabled -->
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Disabled : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="disabled" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>
                <!-- required -->
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
                    <b-form-group label="Mode : " label-cols="6" class="mb-0">
                        <b-form-select v-model="mode" :options="modes" />
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Stacked : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="stacked" class="float-right" name="check-button" switch></b-form-checkbox>
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
    name: 'ConfigFormCheckboxGroup',
    props: {
        data: Number,

    },
    data: function() {
        return {
            showTrue: true,
            showFalse: false,
            expandlevel: 0,
            text: '',
            value: '',
            modes: [{
                    text: 'Normal',
                    value: 'normal'
                },
                {
                    text: 'Switch',
                    value: 'switches'
                },
                {
                    text: 'Buttons',
                    value: 'buttons'
                }
            ],
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
        hasObj: {
            get() {
                return (this.eleObj != null ? true : false);
            }
        },
        options: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.options;
                }
            },
            set(val) {
                return val;
            }
        },
        hasOptions: {
            get() {
                if (this.eleObj != undefined) {
                    return (this.options.length > 0 ? true : false);
                }
            },
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

        mode: {
            get() {

            },
            set(val) {
                console.log(val);
                switch (val) {
                    case "switches":
                        this.$store.commit('editObj', {
                            switches: true
                        })
                        this.$store.commit('editObj', {
                            buttons: false
                        })
                        break;

                    case "buttons":
                        this.$store.commit('editObj', {
                            buttons: true
                        })
                        this.$store.commit('editObj', {
                            switches: false
                        })

                        break;

                    default:
                        this.$store.commit('editObj', {
                            switches: false
                        })
                        this.$store.commit('editObj', {
                            buttons: false
                        })
                }
                return val;
            }
        },
        stacked: {
            get() {
                if (this.eleObj != undefined) {
                    return this.eleObj.stacked;
                }
            },
            set(val) {
                this.$store.commit('editObj', {
                    stacked: val
                })
            }
        },

    },
    methods: {

        changeVal: function() {
            this.value = this.text.replace(/\s/g, '_').toLowerCase();
        },
        addOption: function() {
            this.$store.dispatch('addOption', {
                text: this.text,
                value: this.value
            })
        },
        removeOption: function(index) {
            console.log(index);
            this.$store.dispatch('removeSelectOption', {
                index: index
            });
        },
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
        changeText: function(e) {
            console.log("Changing Text");
            console.log(e);
            this.options[e.target.dataset.index].text = e.target.value;
            this.options[e.target.dataset.index].value = e.target.value.replace(/\s/g, '_').toLowerCase();
            this.$store.commit('editObj', {
                options: this.options
            })
            e.preventDefault();
            e.stopPropagation();
        },
        changeValue: function(e) {

            this.options[e.target.dataset.index].value = e.target.value.replace(/\s/g, '_').toLowerCase();
            this.$store.commit('editObj', {
                options: this.options
            })
            e.preventDefault();
            e.stopPropagation();
        }
    }

}
  </script>