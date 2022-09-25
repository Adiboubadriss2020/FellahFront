export let value = 0
export const api = `https://fellah-back.herokuapp.com`
export const addalimentation = api+`/alimentation/add/`;
export const updatealiemntation = api+`/alimentation/update/`;
export const allalimentation = api+`/alimentation/getAll/`;
export const deletealimentation = api+`/alimentation/delete/`;
// Alimentation_Animal
export const addalimentationanimal = api+`/alimentationanimal/add`;
export const addalimentationanimal_check = api+`/alimentation/check/`;
export const check_alimentation_qnt = api+`/alimentation/updatequantite/`;
export const allalimentationanimal = api+`/alimentationanimal/getAll/`;
export const deletealimentationanimal = api+`/alimentationanimal/delete/`;
// Animal
export const updateanimal = api+`/animal/update/`;
export const allanimal = api+`/animal/getAll/`;
export const addanimal = api+`/animal/add/`;
export const sumanimal = api+`/animal/sum/`;
export const ventedate = api+`/animal/sum/`;
export const sumcharge = api+`/charge/sum/`;
export const charges = api+`/charge/days/`;
export const animals = api+`/animal/days/`;
export const sumgaincharge = api+`/charge/sum/days/`;
export const sumgainanimal = api+`/animal/sum/days/`;
export const deleteanimal = api+`/animal/delete/`;
// Fournisseur
export const updatefournisseur = api+`/fournisseur/update/`;
export const allfournisseur = api+`/fournisseur/getAll/`;
export const addfournisseur = api+`/fournisseur/add/`;
export const deletefournisseur = api+`/fournisseur/delete/`;
// Employés
export const updateemployee = api+`/employee/update/`;
export const allemloyee = api+`/employee/getAll/`;
export const addemployee = api+`/employee/add/`;
export const deleteemployee = api+`/employee/delete/`;
// Client
export const updateclt = api+`/client/update/`;
export const allclt = api+`/client/getAll/`;
export const addclt = api+`/client/add/`;
export const deleteclt = api+`/client/delete/`;
// Veterinaire
export const updateveterinaire = api+`/veterinaire/update/`;
export const allveterinaire = api+`/veterinaire/getAll/`;
export const addveterinaire = api+`/veterinaire/add/`;
export const deleteveterinaire = api+`/veterinaire/delete/`;
export const visitemedicale = api+`/visite/delete/`;

// Visite
export const updatevisite = api+`/visite/update/`;
export const allvisite = api+`/visite/getAll/`;
export const addvisite = api+`/visite/add/`;
export const deletevisite = api+`/visite/delete/`;
export const checkanimal = api+`/animal/check/`;
export const checkveterinaire = api+`/veterinaire/check/`;