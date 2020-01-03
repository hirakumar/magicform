<template>

    <b-card title="Button Group">

        <b-button variant="link" size="md" class="trash" @click="remove">
            <font-awesome-icon :icon="['fas','trash-alt']" />
        </b-button>
        <b-list-group flush>

            <b-list-group-item class="pl-0 pr-0">

                <!-- Placeholder -->
                <b-button @click="addButton">Add Button</b-button>
            </b-list-group-item>
            <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Vertical : " label-cols="6" class="mb-0">
                    <b-form-checkbox v-model="eleObj.vertical" class="float-right" name="check-button" switch></b-form-checkbox>
                </b-form-group>
            </b-list-group-item>
            <!-- size -->
            <b-list-group-item class="pl-0 pr-0">
                <b-form-group label="Size : " label-cols="6" class="mb-0">
                    <b-select v-model="eleObj.size" size="sm" :options="sizeOptions" />
                </b-form-group>
            </b-list-group-item>
            <template v-if="expandlevel>0">
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Tag : " label-cols="6" class="mb-0">
                        <b-input v-model="eleObj.tag" type="text"></b-input>
                    </b-form-group>
                </b-list-group-item>

                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Before : " label-cols="6" class="mb-0">
                        <b-textarea v-model="eleObj.before" type="text" />
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="After : " label-cols="6" class="mb-0">
                        <b-textarea v-model="eleObj.after" type="text" />
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item class="pl-0 pr-0">
                    <b-form-group label="Aria Role : " label-cols="6" class="mb-0">
                        <b-input v-model="eleObj['aria-role']" type="text"></b-input>

                    </b-form-group>
                </b-list-group-item>

                <!-- ID -->
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
    name: 'ButtonGroup',
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
                return this.$store.getters['formBuilder/getObj'](this.eno);
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
            this.$store.dispatch("formBuilder/removeObj",this.eleObj);
        },
        addButton: function() {
            this.$store.dispatch("formBuilder/createEle", {
                ele: 'button'
            });
        }

    }
}
</script>