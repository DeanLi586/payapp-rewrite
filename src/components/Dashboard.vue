<template>
    <div>
        <Navbar />
        <v-content>
            <v-container fluid>
                <v-flex row wrap class="xs12 ma-4 pa-2 md-12">
                    <router-view></router-view>
                </v-flex>
            </v-container>
        </v-content>
        <Footer />
    </div>   
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>

</style>
