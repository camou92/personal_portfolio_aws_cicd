//import RevealOnScroll from "../Ui/RevealOnScroll";
function About() {
  const skills = [
    "Html",
    "Css",
    "Javascript",
    "TypeScript ",
    "Java",
    "Spring boot",
    "Python",
    "React",
    "NextJs",
    "TailwindCSS",
    "Node Js",
    "Express Js",
    "NestJs",
    "Angular",
    "AWS",
    "Kubernetes",
    "Docker",
    "Jenkins",
    "Ansible",
    "Terraform",
    "MongoDB",
    "Sql",
    "Redis",
    "GraphQL",
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
          A Propos
        </h2>
        <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all ">
          <p className="text-gray-300 mb-5 text-xl">
            Développeur Web FullStack et Technicien en réseau depuis plus de 4
            ans, je sais me démarquer par mon leadership et mon sens de la
            communication. Mon expérience m’a aussi appris à m’adapter sans
            cesse puisque le milieu des technologies de l’information est en
            constante évolution
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
            <div className="flex justify-center flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                  key={index}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 hover:-translate-y-1 transition-all">
            <h3 className="text-2xl text-center font-bold mb-8">
              📚 Education
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong>
                  {" "}
                  <em>Bachelor Européen en Développement Web</em>{" "}
                </strong>
                Miage Casablanca (2021-2022)
              </li>
            </ul>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong>
                  {" "}
                  <em>Licence3 Sciences et Techniques de l'informatique</em>{" "}
                </strong>
                Institut Polytechnique de Dakar(IPD) (2017-2018)
              </li>
            </ul>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
              <li>
                <strong>
                  {" "}
                  <em>Licence1,2 Réseaux Informatique</em>{" "}
                </strong>
                Institut Supérieur d'Informatique(ISI) (2014-2016)
              </li>
            </ul>
          </div>
        </div>
        <div className="p-6 hover:-translate-y-1 transition-all">
          <h3 className="text-2xl text-center font-bold mb-8">
            💻 Work Experience
          </h3>
          <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
            <li>
              <strong className="text-blue-400">
                <em>Développeur web FullStack (Freelance / Contract)</em>
              </strong>
              📍
              <br />* Remote | Mars 2021 - Present <br />
              - Concevoir les plans de projet (objectifs, budgets, agendas, ressources)<br/>
              - Conception<br/>
              - Développement de l’application.<br/>
              - Campagne de Tests Manuel et Automatisé.<br/>
              - Déploiement de l’application et le référencement SEO (cicd, Monitoring)<br/>
            </li>

            <li>
              <strong className="text-blue-400">
                <em>Orange Sénégal, Technicien en Réseau (CDD / Contract)</em>
              </strong>
              📍
              <br />* Octobre 2018 - Octobre 2020 <br />
              - Pilotage des équipes d’intervention.<br/>
              - Prise en charge des dérangements clients et piloter le rétablissement du service<br/>
              - Configuration des routeurs Huawei, Test de ligne téléphonique.<br/>
              
            </li>

            <li>
              <strong className="text-blue-400">
                <em>SATREC, Administration système et maintenance informatique (Stage / Contract)</em>
              </strong>
              📍
              <br />* Octobre 2016 - Février 2017 <br />
              - Maintenance informatique et Réseau.<br/>
              - Administration Windows serveur.<br/>
              - Configuration des routeurs cisco<br/>
              
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
