(ns server 
    (:require [ring.adapter.jetty :as jetty]))

(defn handler [request]
    {:status 200
    :body "this is a response."})

(defn run [args]
    (jetty/run-jetty handler {:port 5000 :join? false})
    (println "server up!"))