export const userColumns=[
    {field:"nom",headerName:"Nom", editable: true,width:300},
    {field:"adresse",headerName:"Adresse", editable: true,width:300},
    {field:"email",headerName:"Email", editable: true,width:300},

];

export const employeecol=[
  { field: "nom", headerName: "Nom", editable: true, width: 200 },
  { field: "prenom", headerName: "Prenom", editable: true, width: 200 },
  { field: "age", headerName: "Age", editable: true, width: 200 },
    { field:"adresse",headerName:"Adresse", editable: true,width:250},
   // { field: "salaire", headerName: "Salaire", editable: true, width: 200 },
 
];
export const animalcol = [
    { field: "ref", headerName: "Identifiant", editable: true, width: 80 },
    { field: "date_achat", headerName: "Date d'achat", type: "date",editable: true, width: 150 },
    { field: "date_vente", headerName: "Date de vente", type: "date", editable: true, width: 150 },
    { field: "origine", headerName: "Origine", editable: true, width:100 },
  { field: "poid_achat", headerName: "Poid d'achat", editable: true, width: 100 },
  { field: "poid_vente", headerName: "Poid de vente", editable: true, width: 100 }, 
    { field: "prix_achat", headerName: "Prix d'achat", editable: true, width:150 },
  { field: "prix_vente", headerName: "Prix de vente", editable: true, width: 150 },
    //{ field: "infos", headerName: "Infos", editable: true, width: 300 },



];
export const animalmalade = [
  { field: "ref", headerName: "Identifiant", editable: true, width: 200 },
  { field: "date_achat", headerName: "Date d'achat", type: "date",  width: 200 },
  { field: "origine", headerName: "Race",  width: 100 },
  { field: "poid_achat", headerName: "Poid d'achat",  width: 150 },
  { field: "prix_achat", headerName: "Prix d'achat",  width: 150 },

];
export const clientcol = [
  { field: "nom", headerName: "Nom", editable: true, width: 200 },
  { field: "prenom", headerName: "Prenom", editable: true, width: 200 },
  { field: "adresse", headerName: "Adresse", editable: true, width: 250 },
  { field: "tel", headerName: "Telephone", editable: true, width: 150 },

];
export const alimentationcol = [
  { field: "type_alimentation", headerName: "Type d'alimentation", type: "text", editable: true, width: 300 },
  { field: "date_arrivage", headerName: "Date d'arrivage'", type: "date", editable: true, width: 300 },
  { field: "quantite_arrivage", headerName: "Quantité", editable: true, width: 300 },

];
export const alimentationanimal = [
  { field: "quantite", headerName: "Quantité", type: "number",  width: 200 },
  { field: "date_alimentation", headerName: "Date d'alimentation", type: "date",  width: 200 },
  
];

export const visitecol = [
  { field: "id", headerName: "Numéro", type: "text", width: 150 },
  { field: "date_visite", headerName: "Date de visite", type: "date", editable: true, width: 150 },
  { field: "medicament", headerName: "Médicament", type: "text", editable: true, width: 150 },
  { field: "prix_medicament", headerName: "Prix (Dh)", type: "number", editable: true, width: 150 },

];
export const veterinairecol = [
  { field: "nom", headerName: "Nom", type: "text", editable: true, width: 400 },
  { field: "telephone", headerName: "Description", type: "text", editable: true, width: 400 },
];