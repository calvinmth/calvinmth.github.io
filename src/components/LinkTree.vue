<template>
    <v-card v-for="item in items" :key="item.title" class="ma-5 rounded-xl elevation-3" :href="item.url" target="_blank"
        rel="noopener noreferrer">
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
        title: 'Spotify',
        subtitle: 'Visit calvinmth on Spotify',
        icon: 'mdi-spotify',
        iconColor: 'green',
        url: 'https://bit.ly/calvinmth-spotify',
    },
    {
        title: 'Instagram',
        subtitle: 'Visit calvinmth on Instagram',
        icon: 'mdi-instagram',
        iconColor: 'pink-lighten-2',
        url: 'https://bit.ly/calvinmth-instagram',
    },
    {
        title: 'Youtube',
        subtitle: 'Visit calvinmth on Youtube',
        icon: 'mdi-youtube',
        iconColor: 'red',
        url: 'https://bit.ly/calvinmth-youtube',
    },
];
</script>
