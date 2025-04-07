import { useParams } from "react-router-dom";

const RouteParamsWrapper = ({ children }) => {
  const params = useParams();
  return children(params);
};

export default RouteParamsWrapper;

//Permet de recuperer l'url params dans App, et afficher le nom du CV dans le downloadPDF imos
//Le problème avec useParams dans App, c'est qu’il ne fonctionne que dans un composant qui est enfant direct d’une <Route />
