import Sidebar from "../components/Sidebar";
import "./../styles/global.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faDatabase } from "@fortawesome/free-solid-svg-icons";

const repositories = [
  { name: "design-system", visibility: "Public", language: "React", size: "7320 KB", updated: "1 day ago" },
  { name: "codeant-ci-app", visibility: "Private", language: "Javascript", size: "5871 KB", updated: "2 days ago" },
  { name: "analytics-dashboard", visibility: "Private", language: "Python", size: "4521 KB", updated: "5 days ago" },
  { name: "mobile-app", visibility: "Public", language: "Swift", size: "3096 KB", updated: "3 days ago" },
  { name: "e-commerce-platform", visibility: "Private", language: "Java", size: "6210 KB", updated: "6 days ago" },
  { name: "blog-website", visibility: "Public", language: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
  { name: "social-network", visibility: "Private", language: "PHP", size: "5432 KB", updated: "7 days ago" },
  { name: "social-network", visibility: "Private", language: "PHP", size: "5432 KB", updated: "7 days ago" },
  { name: "social-network", visibility: "Private", language: "PHP", size: "5432 KB", updated: "7 days ago" },
  { name: "social-network", visibility: "Private", language: "PHP", size: "5432 KB", updated: "7 days ago" },
];

const HomePage = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        {/* <Header /> */}
        <div className="repositories-container">
          <header className="repositories-header">
            <div>
              <h2 style={{ fontSize: "28px" }}>
                Repositories
              </h2>
              <p>
                33 Total Repositories
              </p>
            </div>
            <div>
              <button className="refresh-button"><FontAwesomeIcon icon={faArrowsRotate} />&nbsp;Refresh All</button>
              <button className="add-repo-button">+ Add Repository</button>
            </div>
          </header>
          <input className="search-bar" type="text" placeholder= "🔍 Search Repositories" />
          <ul className="repositories-list">
            {repositories.map((repo, index) => (
              <li key={index} className={`repository-item ${repo.visibility.toLowerCase()}`}>
                <div className="repo-info">
                  <h3>{repo.name}</h3>
                  <span className={`visibility ${repo.visibility.toLowerCase()}`}>{repo.visibility}</span>
                </div>
                <div className="repo-details">
                  <span>{repo.language}🔹</span>
                  <span><FontAwesomeIcon icon={faDatabase}/>   {repo.size}</span>
                  <span>Updated {repo.updated}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
