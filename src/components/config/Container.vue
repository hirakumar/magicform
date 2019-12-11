<template>
    <b-card  title="Container">
         <b-button variant="link" size="md" class="trash" @click="removeObj">
            <font-awesome-icon :icon="['fas','trash-alt']" />
        </b-button>
        <b-list-group flush>
            <b-list-group-item>
                <b-form-group label="ID : " label-for="id" label-cols="6" class="mb-0">
                    <b-form-input id="id" type="text" size="sm" v-model="eleObj.id" trim></b-form-input>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-group label="Class : " label-for="class" label-cols="6" class="mb-0">
                    <b-form-input id="class" type="text" size="sm" v-model="eleObj.cass" trim></b-form-input>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item> Fluid Width :
                <b-form-checkbox v-model="eleObj.fluid" class="float-right" name="check-button" switch></b-form-checkbox>
            </b-list-group-item>
          
        </b-list-group>
    </b-card>
</template>
<script>
export default {
    name: 'ConfigContainer',
    props: {
        data: Number
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
      

    },
    components: {

    },
    methods: {
        removeObj() {
            this.$store.dispatch("removeObj");

        },
        setContainerWidth(val) {
            console.log("set:", val);
        },
       
    }
}
</script>