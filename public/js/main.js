const vieille_dame = {
    age: 80,
    nom: {
    prenom: 'Assassin',
    nomfamille: 'Molengeek'
    },
    moral: 'mal',
    objet: 'canne',
parler: function() {
    if (this.moral === 'mal') {
      alert(`Vous me dérangez et le frappe avec sa ${this.objet}`);
    } else {
      alert(`Bonjour ${this.nom.prenom} ${this.nom.nomFamille}`);
    }
  }
};

const vieille_homme  = {
    age:80,
    nom:{
        prenom:'Asus',
        nomfamille: 'laptop'
    },
}