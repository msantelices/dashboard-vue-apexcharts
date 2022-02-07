<template>
    <apexchart :options="options" :series="series"></apexchart>
</template>

<script>
import { toRef } from 'vue'
export default {
    props: ['title', 'data', 'xaxis'],
    setup(props) {
        const options = {
            // Tipo de grafico y barra de herramientas
            chart: {
                type: 'line',
                toolbar: {
                    show: false
                },
            },

            // Título del Gráfico - Obtenido por prop
            title: {
                text: props.title,
                style: {
                    color: '#fff'
                }
            },

            // Etiquetas sobre las barras
            dataLabels: {
                enabled: false
            },

            // Estilos del tooltip
            tooltip: {
                theme: 'dark'
            },

            // Estilos del gráfico
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100]
                }
            },
            // Si tenemos mas de una serie de datos, necesitamos agregar mas colores en el arreglo
            colors: ['#fccf31', '#f02fc2'],
            grid: {
                borderColor: "#40475d",
            },

            // Eje X
            xaxis: {
                // Categorias obtenidas por prop (data)
                categories: props.data.categories,
                labels: {
                    style: {
                        colors: '#fff'
                    }
                },
                title: {
                    // Titulo del eje obtenido por prop
                    text: props.xaxis,
                    style: {
                        color: '#fff'
                    }
                }
            },

            // Eje Y
            yaxis: {
                labels: {
                    style: {
                        colors: '#fff'
                    }
                }
            },

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
            }
        }

        // Data - Obtenida por Props
        const series = toRef(props.data, 'series')


        return { options, series }
    }
}
</script>
