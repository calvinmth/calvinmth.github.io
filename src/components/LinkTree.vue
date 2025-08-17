<template>
    <v-card v-for="item in items" class="ma-5 rounded-xl elevation-3" @click="redirect(item.url)">
        <v-card-title>
            <v-icon start :color="item.iconColor">{{ item.icon }}</v-icon>
            {{ item.title }}
        </v-card-title>
        <v-card-subtitle>
            {{ item.subtitle }}
        </v-card-subtitle>
        <v-card-text>
            {{ item.text }}
        </v-card-text>
    </v-card>
</template>

<script setup>
const items = [
    {
        'title': 'Spotify',
        'subtitle': 'Visit calvinmth on Spotify',
        'icon': 'mdi-spotify',
        'iconColor': 'green',
        'url': 'bit.ly/calvinmth-spotify',
    },
    {
        'title': 'Instagram',
        'subtitle': 'Visit calvinmth on Instagram',
        'icon': 'mdi-instagram',
        'iconColor': 'pink-lighten-2',
        'url': 'bit.ly/calvinmth-instagram',
    },
    {
        'title': 'Youtube',
        'subtitle': 'Visit calvinmth on Youtube',
        'icon': 'mdi-youtube',
        'iconColor': 'red',
        'url': 'bit.ly/calvinmth-youtube',
    },
];

function redirect(url) {
    window.location.href = url;
};
</script>