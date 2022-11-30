Vue.component('table-component', {
    props: {
        'title': String,
        'users': Array,
        'stylecomp': Object,
    },
    template: `<div>
    <h3>{{title}}</h3>
    <table :style="stylecomp">
        <tr>
            <th v-for="(value,name) in users[0]" >{{name}}</th>
        </tr>
        <tr v-for="user in users">        
        <td v-for="(value, name) in user">{{value}} </td>
        </tr>
    </table>
                </div>`
})