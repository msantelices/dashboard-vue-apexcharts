<template>
    <nav>
        <h3>Vue 3 + Apex Charts</h3>
        <a href="#">Blog</a>
    </nav>
    <main>
        <div class="col">
            <div class="card">
                <Column 
                    title="Carga promedio (%)" 
                    xaxis="Hora"
                    :data="loadAverage" />
            </div>
        </div>
        <div class="col">
            <div class="card">
                <Line 
                    title="Procesos" 
                    xaxis="Hora"
                    :data="processes" />
            </div>
        </div>
        <div class="col">
            <div class="card">
                <Donut 
                    title="Dispositivos"
                    :data="devices"/>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <h3>Procesos activos</h3>
                <Progress 
                    v-for="(process, index) in processDetail"
                    :key="index"
                    :data="process"/>
            </div>
        </div>
  </main>
</template>

<script>
import data from '@/data.js'
import Column from '@/components/Column.vue'
import Line from '@/components/Line.vue'
import Donut from '@/components/Donut.vue'
import Progress from '@/components/Progress.vue'
export default {
    components: { Column, Line, Donut, Progress },
    setup() {
        const { loadAverage, processes, devices, processDetail } = data

        return { loadAverage, processes, devices, processDetail }
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

:root {
    --bg: #1b213b;
    --main: #262d47;
    --text: #fff;
    --font: "Montserrat", sans-serif;
    --shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background: var(--bg);
    font-family: var(--font);
    color: var(--text);
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 600;
}

a {
    color: var(--text);
    text-decoration: none;
}

nav {
    width: 100%;
    padding: 1rem 3rem;
    background: var(--main);
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav a {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
}

main {
    margin: 3rem auto;
    padding: 0 2rem;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
}

.col {
    width: 50%;
    padding: 1rem;
    display: flex;
}

.card {
    background: var(--main);
    border-radius: 5px;
    box-shadow: var(--shadow);
    padding: 1rem;
    width: 100%;
}

.card h3 {
    margin-bottom: 3rem;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
    padding-left: 10px;
    font-weight: 900;
}

@media (max-width: 992px) {
    .col {
        width: 100%;
    }
}

@media (max-width: 768px) {
    main {
        padding: 0;
    }
}
</style>
