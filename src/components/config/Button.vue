<template>

    <b-card title="Button">
        <b-button variant="link" size="md" class="trash" @click="remove">
            <font-awesome-icon :icon="['fas','trash-alt']" />
        </b-button>
        <b-list-group flush>

            <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Text : " label-cols="6" class="mb-0">
                    <b-input v-model="eleObj.text" size="sm" />
                </b-form-group>
            </b-list-group-item>

            <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Name : " label-cols="6" class="mb-0">
                    <b-input v-model="eleObj.name" size="sm" />
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Type : " label-cols="6" class="mb-0">
                    <b-form-select v-model="eleObj.type" :options="buttonType" size="sm"></b-form-select>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Variant : " label-cols="6" class="mb-0">
                    <b-form-select v-model="eleObj.variant" :options="variantOptions" size="sm"></b-form-select>
                </b-form-group>
            </b-list-group-item>

            <template v-if="expandlevel>0">

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Border Style : " label-cols="6" class="mb-0">
                        <b-form-select v-model="eleObj.borderStyle" :options="borderStyleOptions" size="sm"></b-form-select>

                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="ID : " label-cols="6" class="mb-0">
                        <b-input v-model="eleObj.id" size="sm" />
                    </b-form-group>
                </b-list-group-item>
                <!-- Class -->
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Class : " label-cols="6" class="mb-0">
                        <b-input v-model="eleObj.class" size="sm" />
                    </b-form-group>
                </b-list-group-item>

                <!-- disabled -->
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Disabled : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="eleObj.disabled" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <!-- size -->
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Size : " label-cols="6" class="mb-0">
                        <b-select v-model="eleObj.size" size="sm" :options="sizeOptions" />
                    </b-form-group>
                </b-list-group-item>

                <!-- size -->
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Href : " label-cols="6" class="mb-0">

                        <b-input v-model="eleObj.href" size="sm" />
                    </b-form-group>
                </b-list-group-item>

                <!-- disabled -->
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Block : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="eleObj.block" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <!-- order -->
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Order : " label-cols="6" class="mb-0">
                        <b-input v-model="eleObj.order" size="sm" type="number" min="1" />
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
    name: 'Button',
    props: {
        data: Number
    },
    data: function() {
        return {
            expandlevel: 0,
            buttonType: [{
                    text: 'Button',
                    value: 'button'
                },
                {
                    text: 'Submit',
                    value: 'submit'
                },
                {
                    text: 'Reset',
                    value: 'reset'
                }
            ],
            borderStyleOptions: [{
                    text: 'None',
                    value: null
                },
                {
                    text: 'Pill',
                    value: 'pill'
                },
                {
                    text: 'Squared',
                    value: 'squared'
                }
            ],
            variantOptions: [{
                    text: 'Primary',
                    value: 'primary'
                },
                {
                    text: 'Outline Primary',
                    value: 'outline-primary'
                },
                {
                    text: 'Secondary',
                    value: 'secondary'
                },
                {
                    text: 'Outline Secondary',
                    value: 'outline-secondary'
                },
                {
                    text: 'Success',
                    value: 'success'
                },
                {
                    text: 'Outline Success',
                    value: 'outline-success'
                },
                {
                    text: 'Danger',
                    value: 'danger'
                },
                {
                    text: 'Outline Danger',
                    value: 'outline-danger'
                },
                {
                    text: 'Warning',
                    value: 'warning'
                },
                {
                    text: 'Outline Danger',
                    value: 'outline-warning'
                },
                {
                    text: 'Info',
                    value: 'info'
                },
                {
                    text: 'Outline Info',
                    value: 'outline-info'
                },
                {
                    text: 'Light',
                    value: 'light'
                },
                {
                    text: 'Outline Light',
                    value: 'outline-light'
                },
                {
                    text: 'Dark',
                    value: 'dark'
                },
                {
                    text: 'Outline Dark',
                    value: 'outline-dark'
                },
                {
                    text: 'Link',
                    value: 'link'
                },

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
                return this.$store.getters['formBuilder/getObj'](this.data);
            },
            set(val) {
                return val;
            }
        },

       
        borderStyle: {
            get() {
                if (this.eleObj != undefined) {
                    switch (this.eleObj['border-style']) {
                        case 'pill':
                            this.$store.commit('formBuilder/editObj', {
                                pill: true
                            })
                            this.$store.commit('formBuilder/editObj', {
                                squared: false
                            })

                            break;

                        case 'squared':
                            this.$store.commit('formBuilder/editObj', {
                                pill: false
                            })
                            this.$store.commit('formBuilder/editObj', {
                                squared: true
                            })
                            break;

                        default:
                            this.$store.commit('formBuilder/editObj', {
                                pill: false
                            })
                            this.$store.commit('formBuilder/editObj', {
                                squared: false
                            })
                    }
                }
            },
            set(val) {
                console.log();
                switch (val) {
                    case 'pill':
                        this.$store.commit('formBuilder/editObj', {
                            'border-style': 'pill'
                        })
                        break;

                    case 'squared':
                        this.$store.commit('formBuilder/editObj', {
                            'border-style': 'squared'
                        })
                        break;

                    default:
                        this.$store.commit('formBuilder/editObj', {
                            'border-style': null
                        })
                }
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
            this.$store.dispatch("formBuilder/removeObj",this.eleObj);
        },

    }
}
</script>