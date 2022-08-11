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
    { field: "salaire", headerName: "Salaire", editable: true, width: 200 },
 
];
export const animalcol = [
    { field: "ref", headerName: "Identifiant", editable: true, width: 100 },
    { field: "date_achat", headerName: "Date d'achat", type: "date",editable: true, width: 150 },
    { field: "date_vente", headerName: "Date de vente", type: "date", editable: true, width: 150 },
    { field: "origine", headerName: "Origine", editable: true, width:100 },
    { field: "poid_achat", headerName: "Poid d'achat", editable: true, width: 100 },
    { field: "poid_vente", headerName: "Poid de vente", editable: true, width: 100 }, 
    { field: "prix_achat", headerName: "Prix d'achat", editable: true, width: 150 },
    { field: "infos", headerName: "Infos", editable: true, width: 300 },



];
export const animalmalade = [
  { field: "ref", headerName: "Identifiant", editable: true, width: 200 },
  { field: "date_achat", headerName: "Date d'achat", type: "date",  width: 200 },
  { field: "origine", headerName: "Origine",  width: 100 },
  { field: "poid_achat", headerName: "Poid d'achat",  width: 150 },
  { field: "prix_achat", headerName: "Prix d'achat",  width: 150 },

];
export const clientcol = [
  { field: "nom", headerName: "Nom", editable: true, width: 200 },
  { field: "prenom", headerName: "Prenom", editable: true, width: 200 },
  { field: "adresse", headerName: "Adresse", editable: true, width: 250 },
  { field: "tel", headerName: "Telephone", editable: true, width: 200 },

];
export const alimentationcol = [
  { field: "type_alimentation", headerName: "Type d'alimentation", type: "text", editable: true, width: 200 },
  { field: "date_arrivage", headerName: "Date d'arrivage'", type: "date", editable: true, width: 200 },
  { field: "quantite_arrivage", headerName: "Quantité", editable: true, width: 200 },
  { field: "prix_arrivage", headerName: "Prix", editable: true, width: 200 }

];
export const alimentationanimal = [
  { field: "quantite", headerName: "Quantité par jour", type: "number", editable: true, width: 200 },
  { field: "date_alimentation", headerName: "Date d'alimentation", type: "date", editable: true, width: 200 },
  { field: "alimentation", headerName: "Bovin Id", type: "number", width: 200 },
];

export const visitecol = [
  { field: "id", headerName: "Numéro", type: "text", width: 100 },
  { field: "date_visite", headerName: "Date de visite", type: "text", editable: true, width: 200 },
  { field: "prix_visite", headerName: "Prix",type:"date", editable: true, width: 200 },
];
export const veterinairecol = [
  { field: "nom", headerName: "text", type: "text", width: 100 },
  { field: "telephone", headerName: "Description", type: "text", editable: true, width: 200 },
  { field: "transaction", headerName: "Transaction", type: "texte", editable: true, width: 200 },
  { field: "date", headerName: "Date de transaction", type: "date", editable: true, width: 200 },
];