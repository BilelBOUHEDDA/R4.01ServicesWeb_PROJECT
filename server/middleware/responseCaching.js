
/*function responseCaching(req, res, next) {
    // Générer une clé unique pour cette requête en utilisant l'URL et la méthode HTTP
  const cacheKey = `${req.method}-${req.originalUrl}`;

  // Vérifier si la réponse est en cache
  const cachedResponse = cache.get(cacheKey);
  if (cachedResponse) {
    // Si la réponse est en cache, renvoyer une réponse vide avec le code HTTP "304 Not Modified"
    res.status(304).send();
    return;
  }

  // Si la réponse n'est pas en cache, passer la requête au middleware suivant avec la fonction next()
  next();

  // Une fois que le middleware suivant a terminé de traiter la requête, vérifier si la réponse peut être mise en cache
  if (res.statusCode === 200) {
    // Stocker la réponse en cache pendant 60 secondes
    cache.put(cacheKey, res.body, 60 * 1000);
  }
} 

function responseCaching(req, res, next) {
    console.log("PATEROPA")
    // Générer une clé unique pour cette requête en utilisant l'URL et la méthode HTTP
    const cacheKey = `${req.method}-${req.originalUrl}`;
  
    // Vérifier si la réponse est en cache
    const cachedResponse = cache.get(cacheKey);
    console.log(cachedResponse);
    if (cachedResponse) {
        console.log("LA REPONSE EST DANS LE CACHE")
      // Si la réponse est en cache, renvoyer la réponse mise en cache
      //res.status(304).send();
      res.send(cachedResponse);
      return;
    }
  
    // Si la réponse n'est pas en cache, passer la requête au middleware suivant avec la fonction next()
    next();
  
    // Une fois que le middleware suivant a terminé de traiter la requête, vérifier si la réponse peut être mise en cache
    if (res.statusCode === 200) {

      /*const responseBody = res.body; // stocker la réponse
      console.log("Response from server: ", responseBody);*/

      /*const responseBody = JSON.stringify(res.body); // convertir la réponse en JSON
      console.log("Response from server en JSON: ", responseBody);

      // res.body -> vide
      console.log("Résulat de la requête : ",results.rows)

      // Stocker la réponse en cache pendant 60 secondes
      cache.put(cacheKey, results.rows, 60 * 1000);
      console.log("cacheKey",cacheKey)
  
      // Ajouter l'en-tête "Cache-Control" à la réponse
      res.set('Cache-Control', 'public, max-age=60');
    }
} */ 



/*const responseCaching = (req, res, next) => {
  const cacheKey = '__express__' + req.originalUrl || req.url;
  const cachedResponse = cache.get(cacheKey);

  if (cachedResponse) {
    res.status(304).send();
    res.send(cachedResponse);
    return;
  }

  // Si la réponse n'est pas en cache, on stocke la réponse dans le cache
  res.sendResponse = res.send;
  res.send = (body) => {
    console.log(body)
    cache.put(cacheKey, body, 60 * 1000); // Mettre en cache pendant 60 secondes
    res.sendResponse(body);
  };

  next();
};*/


const cache = require("memory-cache");


/* Configurer la durée de mise en cache pour chaque méthode HTTP séparément */

const CACHE_DURATION = {
  GET: 60 * 1000, // 1 minute
  POST: 0,
  PUT: 0, 
  DELETE: 0, 
};

const responseCaching = (req, res, next) => {

  const cacheKey = req.originalUrl;

  res.on("finish", () => {
    if (res.statusCode === 200) {
        const cacheDuration = CACHE_DURATION[req.method.toUpperCase()];
        if (cacheDuration !== undefined) {
            const responseBody = res.locals.data; // Récupération des données envoyées par l'API
            console.log("La réponse à la requête : ",responseBody)
            cache.put(cacheKey, responseBody, cacheDuration);
            console.log("Réponse stockée dans le cache par la clé url suivante :" + cacheKey + " pendant " + cacheDuration + "ms");
        }
    }
  });


  if (cache.get(cacheKey) !== null) {
    console.log("Réponse envoyée par le cache : ", cacheKey);
    const cachedResponse = cache.get(cacheKey);
    console.log(cachedResponse);
    res.setHeader("X-Cache-Hit", "true");
    return res.status(304).json(cachedResponse);
  }

  next();

};

module.exports = responseCaching;