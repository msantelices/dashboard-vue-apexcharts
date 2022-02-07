<template>
    <apexchart :options="options" :series="series"></apexchart>
</template>

<script>
import { toRef } from 'vue'
export default {
    props: ['title', 'data'],
    setup(props) {
        const options = {
            // Tipo de grafico y barra de herramientas
            chart: {
                type: 'donut',
                toolbar: {
                    show: false
                },
            },

            // Ajustamos el tamaño del grafico
            plotOptions: {
                pie: {
                    customScale: 0.75,
                }
            },

            // Título del Gráfico - Obtenido por prop
            title: {
                text: props.title,
                style: {
                    color: '#fff'
                }
            },

            // Etiquetas sobre el grafico
            dataLabels: {
                enabled: false
            },

            // Estilos del gráfico
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    shadeIntensity: 0.3,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100]
                }
            },
            // Esto remueve las líneas que separan las secciones del gráfico
            stroke: {
                show: false
            },

            // Si tenemos mas de una serie de datos, necesitamos agregar mas colores en el arreglo
            colors: ['#f02fc2', '#17ead9'],

            // Leyenda
            legend: {
                show: true,
                floating: true,
                horizontalAlign: 'right',
                onItemClick: {
                    toggleDataSeries: false
                },
                position: 'top',
                offsetY: -28,
                offsetX: 60,
                labels: {
                    colors: '#fff'
                }
            },

            // Los graficos de tipo circular toman las categorias de esta forma:
            labels: props.data.categories
        }

        // Data - Obtenida por Props
        const series = toRef(props.data, 'series')


        return { options, series }
    }
}
</script>
