Après avoir pull le projet, il faut faire npm install sur le backend et le frontend (frontendHangout)

Backend
npx knex migrate:lateset (Migration)
npx knex seed:run (Seed)
juste besoins de les faires quand on veut reset la database
node api.js
Lance le serveur backend

Frontend (Ne pas oublier de CD frontendHangout)

ng serve
Lance le serveur frontend
ng generate component component-name
