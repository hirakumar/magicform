<template>
    
    <b-card title="Form File">
        
        <b-button variant="link" size="md" class="trash" @click="remove">
            <font-awesome-icon :icon="['fas','trash-alt']" />
        </b-button>
        <b-list-group flush>
             <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Placeholder : " label-cols="6" class="mb-0">
                    <b-input v-model="eleObj.placeholder" size="sm" />
                </b-form-group>
            </b-list-group-item>

           <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Drop Placeholder : " label-cols="6" class="mb-0">
                    <b-input v-model="eleObj['drop-placeholder']" size="sm" />
                </b-form-group>
            </b-list-group-item>
           
            <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Name : " label-cols="6" class="mb-0">
                    <b-input v-model="eleObj.name" size="sm" />
                </b-form-group>
            </b-list-group-item>

            <template v-if="expandlevel>0">
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Accept : " label-cols="6" class="mb-0">
                        <b-input v-model="eleObj.accept" size="sm" />
                    </b-form-group>
                </b-list-group-item>
                
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="ID : " label-cols="6" class="mb-0">
                        <b-input v-model="eleObj.id" size="sm" />
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Class : " label-cols="6" class="mb-0">
                        <b-input v-model="eleObj.class" size="sm" />
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Disabled : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="eleObj.disabled" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Required : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="eleObj.required" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Size : " label-cols="6" class="mb-0">
                        <b-select v-model="eleObj.size" size="sm" :options="sizeOptions" />
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Multiple  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="eleObj.multiple" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Plain  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="eleObj.plain" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Directory  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="eleObj.directory" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Browse Text  : " label-cols="6" class="mb-0">
                        <b-input v-model="eleObj['browse-text']" size="sm" />
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Capture  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="eleObj.capture" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="No Traverse  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="eleObj['no-traverse']" class="float-right" name="check-button" switch></b-form-checkbox>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="No Drop  : " label-cols="6" class="mb-0">
                        <b-form-checkbox v-model="eleObj['no-drop']" class="float-right" name="check-button" switch></b-form-checkbox>
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
                return this.$store.getters['formBuilder/getObj'](this.data);
            },
            set(val) {
                return val;
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
            this.$store.dispatch("formBuilder/removeObj");
        },

    }
}
</script>