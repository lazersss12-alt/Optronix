import { mediaUrl } from '../config/media';
// import React from "react";
// import "./educationalpage.css";
// import mediaUrl.video("splicer.mp4") from "./img/splicer.mp4";
// import mediaUrl.video("Pass_Fail Function.mp4") from "./img/Pass_Fail Function.mp4";
// import mediaUrl.video("Nanotune.mp4") from "./img/Nanotune.mp4";
// import mediaUrl.video("wirelesslanesetup.mp4") from "./img/wirelesslanesetup.mp4";
// import mediaUrl.video("electrodechange.mp4") from "./img/electrodechange.mp4";
// import mediaUrl.video("v-groove.mp4") from "./img/v-groove.mp4";
// import mediaUrl.video("cleaning.mp4") from "./img/cleaning.mp4";
// import mediaUrl.video("stripping.mp4") from "./img/stripping.mp4";
// import mediaUrl.video("splicer.mp4") from "./img/splicer.mp4"; // Use this instead of the image


// const videos = [
//   {
//     title: "How to turn on splicer",
//     src: mediaUrl.video("splicer.mp4"),
//   },
//   {
//     title: "Pass Fail Functions ",
//     src: mediaUrl.video("Pass_Fail Function.mp4"),
//   },
//   {
//     title: "what is NanoTune",
//     src: mediaUrl.video("Nanotune.mp4"),
//   },
//   {
//     title: "how to setup Wireless Lane",
//     src: mediaUrl.video("wirelesslanesetup.mp4"),
//   },
//   {
//     title: "How to change electrode",
//     src: mediaUrl.video("electrodechange.mp4"),
//   },
//   {
//     title: "How to clean v-groove",
//     src: mediaUrl.video("v-groove.mp4"),
//   },
//   {
//     title: "  How to clean",
//     src: mediaUrl.video("cleaning.mp4"),
//   },
//   {
//     title: "How to Stripping the fiber coating",
//     src: mediaUrl.video("stripping.mp4"),
//   },
// ];

// const EducationalPage = () => {
//   return (
//     <div className="ted-wrapper">
//       {/* Featured Video Section */}
//       <div className="ted-featured">
//         <video
//           src={mediaUrl.video("splicer.mp4")}
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="ted-featured-img" // keep the same class for styling
//         />
//         <div className="ted-featured-overlay">
//           <h2>How to use Network realted product</h2>
//           <p>
//             One of the best product
//           </p>
//           <div className="ted-meta">
//             <span></span>
//             <span></span>
//           </div>
//           <button className="ted-play-button">▶</button>
//         </div>
//       </div>

//       {/* Watch Next Section */}
//       <div className="ted-watch-next">
//         <h3>Watch next</h3>
//         <div className="ted-video-grid">
//           {videos.map((video, i) => (
//             <div key={i} className="ted-card ted-card-animated">
//               <video
//                 src={video.src}
//                 controls
//                 className="ted-video"
//               />
//               <p>{video.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationalPage;






import React, { useState, useEffect, useRef, useCallback } from "react";
import "./educationalpage.css";

// ============================================
// VIDEO IMPORTS
// ============================================
import { Helmet } from 'react-helmet-async';

// ============================================
// MOCK DATA
// ============================================
const playlists = [
  {
    id: 1,
    title: "How to Turn On Fusion Splicer",
    category: "Fusion Splicer",
    thumbnail: mediaUrl.image("test1.jpeg"),
    lessons: 5,
    duration: "48 sec",
    skillLevel: "beginner",
    videoSrc: mediaUrl.video("splicer.mp4")
  },
  {
    id: 2,
    title: "Pass/Fail Function Explained",
    category: "OTDR",
    thumbnail: mediaUrl.image("test2.jpeg"),
    lessons: 3,
    duration: "57 sec",
    skillLevel: "intermediate",
    videoSrc: mediaUrl.video("Pass_Fail Function.mp4")
  },
  {
    id: 3,
    title: "What is NanoTune Technology",
    category: "Advanced Features",
    thumbnail: mediaUrl.image("test3.jpeg"),
    lessons: 4,
    duration: "41 sec",
    skillLevel: "advanced",
    videoSrc: mediaUrl.video("Nanotune.mp4")
  },
  {
    id: 4,
    title: "Wireless LAN Setup Guide",
    category: "Network Setup",
    thumbnail: mediaUrl.image("test4.jpeg"),
    lessons: 6,
    duration: "1 min 27 sec",
    skillLevel: "intermediate",
    videoSrc: mediaUrl.video("wirelesslanesetup.mp4")
  },
  {
    id: 5,
    title: "Electrode Replacement Procedure",
    category: "Maintenance",
    thumbnail: mediaUrl.image("test5.jpeg"),
    lessons: 2,
    duration: "2 min 6 sec",
    skillLevel: "beginner",
    videoSrc: mediaUrl.video("electrodechange.mp4")
  },
  {
    id: 6,
    title: "V-Groove Cleaning Techniques",
    category: "Maintenance",
    thumbnail: mediaUrl.image("test6.jpeg"),
    lessons: 3,
    duration: "27 sec",
    skillLevel: "beginner",
    videoSrc: mediaUrl.video("v-groove.mp4")
  },
  {
    id: 7,
    title: "Complete Cleaning Guide",
    category: "Maintenance",
    thumbnail: mediaUrl.image("test7.jpeg"),
    lessons: 5,
    duration: "3 min 13 sec",
    skillLevel: "beginner",
    videoSrc: mediaUrl.video("cleaning.mp4")
  },
  {
    id: 8,
    title: "Fiber Coating Stripping Methods",
    category: "Fiber Preparation",
    thumbnail: mediaUrl.image("test8.jpeg"),
    lessons: 4,
    duration: "44 sec",
    skillLevel: "intermediate",
    videoSrc: mediaUrl.video("stripping.mp4")
  }
];

const filters = {
  productLine: [
    { id: "fusion-splicer", label: "Fusion Splicer", matchValue: "fusion splicer" },
    { id: "otdr", label: "OTDR", matchValue: "otdr" },
    { id: "fiber-preparation", label: "Fiber Preparation", matchValue: "fiber preparation" },
    { id: "network-equipment", label: "Network Equipment", matchValue: "network setup" },
    { id: "maintenance", label: "Maintenance", matchValue: "maintenance" }
  ]
};

const getProductLineMatchValue = (filterId) => {
  const option = filters.productLine.find((opt) => opt.id === filterId);
  return (option?.matchValue || option?.label || filterId).toLowerCase();
};

const searchSuggestions = [
  { text: "Fusion splicer setup", type: "Tutorial" },
  { text: "Error code E01", type: "Troubleshooting" },
  { text: "Electrode replacement", type: "Maintenance" },
  { text: "V-groove cleaning", type: "Procedure" },
  { text: "OTDR calibration", type: "Tutorial" }
];

// ============================================
// SVG ICONS
// ============================================
const Icons = {
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),

  Bell: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),

  Settings: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),

  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),

  ChevronDown: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),

  ChevronRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),

  ChevronLeft: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),

  Play: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),

  Clock: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),

  Layers: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),

  Book: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),

  Tool: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),

  Check: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),

  X: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),

  Plus: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),

  Headphones: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  ),

  MessageCircle: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),

  AlertCircle: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),

  Filter: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),

  Star: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
};

// ============================================
// HEADER COMPONENT
// ============================================
const Header = ({ onMenuClick, isSidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const searchRef = useRef(null);

  const filteredSuggestions = searchQuery.length > 0
    ? searchSuggestions.filter((s) =>
      s.text.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : searchSuggestions;

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestion((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestion((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter" && selectedSuggestion >= 0) {
      setSearchQuery(filteredSuggestions[selectedSuggestion].text);
      setShowSuggestions(false);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="training-header" role="banner">
      <div className="header-left">
        <a href="/" className="logo" aria-label="Optronix Home">
          <div className="logo-icon">O</div>
          <span className="logo-text">
            Optro<span>nix</span>
          </span>
        </a>
      </div>

      <div className="search-container" ref={searchRef}>
        <div className="search-wrapper">
          <span className="search-icon">
            <Icons.Search />
          </span>
          <input
            type="search"
            className="search-input"
            placeholder="Search by model, error code, procedure..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
              setSelectedSuggestion(-1);
            }}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            aria-label="Search training content"
            aria-autocomplete="list"
            aria-expanded={showSuggestions}
            aria-controls="search-suggestions"
          />
        </div>
        <div
          id="search-suggestions"
          className={`search-suggestions ${showSuggestions && filteredSuggestions.length > 0 ? "active" : ""
            }`}
          role="listbox"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className={`suggestion-item ${selectedSuggestion === index ? "selected" : ""
                }`}
              onClick={() => {
                setSearchQuery(suggestion.text);
                setShowSuggestions(false);
              }}
              role="option"
              aria-selected={selectedSuggestion === index}
            >
              <Icons.Search />
              <span className="suggestion-text">{suggestion.text}</span>
              <span className="suggestion-type">{suggestion.type}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="header-right">
        <button className="header-icon-btn" aria-label="Notifications">
          <Icons.Bell />
        </button>
        <button className="header-icon-btn" aria-label="Settings">
          <Icons.Settings />
        </button>
        <div className="user-avatar" aria-label="User profile">
          JD
        </div>
        <button
          className="header-icon-btn hamburger-btn"
          onClick={onMenuClick}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={isSidebarOpen}
        >
          <Icons.Menu />
        </button>
      </div>
    </header>
  );
};

// ============================================
// FILTER ACCORDION COMPONENT
// ============================================
const FilterAccordion = ({ title, options, selectedFilters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="filter-group">
      <button
        className="filter-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="filter-header-left">
          <h4>{title}</h4>
        </div>

        <span className={`filter-chevron ${isOpen ? "open" : ""}`}>
          <Icons.ChevronDown />
        </span>
      </button>
      <div className={`filter-content ${isOpen ? "open" : ""}`}>
        <div className="filter-content-inner">
          {options.map((option) => (
            <label
              key={option.id}
              className={`filter-option ${selectedFilters.includes(option.id) ? "selected" : ""
                }`}
            >
              <div className="filter-checkbox">
                {selectedFilters.includes(option.id) && <Icons.Check />}
              </div>
              <input
                type="checkbox"
                checked={selectedFilters.includes(option.id)}
                onChange={() => onFilterChange(option.id)}
                className="sr-only"
              />
              <span className="filter-label">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// SIDEBAR COMPONENT (Desktop)
// ============================================
const Sidebar = ({
  isOpen,
  onClose,
  selectedFilters,
  onFilterChange,
  onClearFilters
}) => {
  const allSelectedFilters = [...selectedFilters.productLine];

  const getFilterLabel = (id) => {
    const allOptions = [...filters.productLine];
    return allOptions.find((o) => o.id === id)?.label || id;
  };

  const handleRemoveFilter = (id) => {
    if (filters.productLine.find((f) => f.id === id)) {
      onFilterChange("productLine", id);
    }
  };

  return (
    <aside
      className="training-sidebar desktop-sidebar"
      role="navigation"
      aria-label="Filters"
    >
      <div className="sidebar-header">
        <span className="sidebar-title">Filters</span>
        {allSelectedFilters.length > 0 && (
          <button className="clear-filters-btn" onClick={onClearFilters}>
            Clear all
          </button>
        )}
      </div>

      {allSelectedFilters.length > 0 && (
        <div className="applied-filters" role="list" aria-label="Applied filters">
          {allSelectedFilters.map((id) => (
            <span key={id} className="filter-tag" role="listitem">
              {getFilterLabel(id)}
              <button
                className="filter-tag-remove"
                onClick={() => handleRemoveFilter(id)}
                aria-label={`Remove ${getFilterLabel(id)} filter`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}

      <FilterAccordion
        title="Product Line"
        options={filters.productLine}
        selectedFilters={selectedFilters.productLine}
        onFilterChange={(id) => onFilterChange("productLine", id)}
      />
    </aside>
  );
};

// ============================================
// MOBILE FILTER MODAL COMPONENT
// ============================================
const MobileFilterModal = ({
  isOpen,
  onClose,
  selectedFilters,
  onFilterChange,
  onClearFilters
}) => {
  const allSelectedFilters = [...selectedFilters.productLine];

  const getFilterLabel = (id) => {
    const allOptions = [...filters.productLine];
    return allOptions.find((o) => o.id === id)?.label || id;
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-filter-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className={`mobile-filter-modal ${isOpen ? 'open' : ''}`}>
        {/* Handle bar */}
        <div className="mobile-filter-handle"></div>

        {/* Header */}
        <div className="mobile-filter-header">
          <h3>Filter Videos</h3>
          <button className="mobile-filter-close" onClick={onClose} aria-label="Close filters">
            <Icons.X />
          </button>
        </div>

        {/* Applied Filters */}
        {allSelectedFilters.length > 0 && (
          <div className="mobile-applied-filters">
            <div className="applied-filters-header">
              <span>Applied Filters</span>
              <button className="clear-all-btn" onClick={onClearFilters}>
                Clear all
              </button>
            </div>
            <div className="applied-filters-list">
              {allSelectedFilters.map((id) => (
                <span key={id} className="mobile-filter-tag">
                  {getFilterLabel(id)}
                  <button
                    onClick={() => onFilterChange("productLine", id)}
                    aria-label={`Remove ${getFilterLabel(id)} filter`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Filter Options */}
        <div className="mobile-filter-options">
          <h4 className="mobile-filter-section-title">Category</h4>
          {filters.productLine.map((option) => (
            <div
              key={option.id}
              className={`mobile-filter-option ${selectedFilters.productLine.includes(option.id) ? 'active' : ''
                }`}
              onClick={() => onFilterChange("productLine", option.id)}
            >
              <span>{option.label}</span>
              {selectedFilters.productLine.includes(option.id) && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Apply Button */}
        <div className="mobile-filter-footer">
          <button className="mobile-filter-apply-btn" onClick={onClose}>
            Show Results
          </button>
        </div>
      </div>
    </>
  );
};

// ============================================
// FEATURED SECTION COMPONENT
// ============================================
const FeaturedSection = ({ onPlayVideo }) => {
  return (
    <section className="featured-section" aria-labelledby="featured-heading">
      <div
        className="featured-main"
        onClick={() => onPlayVideo(mediaUrl.video("splicer.mp4"))}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onPlayVideo(mediaUrl.video("splicer.mp4"))}
        aria-label="Play featured video: Complete Fusion Splicer Training"
      >
        <video
          src={mediaUrl.video("splicer.mp4")}
          className="featured-media"
          muted
          loop
          autoPlay
          playsInline
          aria-hidden="true"
        />
        <div className="featured-overlay">
          <span className="featured-badge">
            <Icons.Star /> Featured
          </span>
          <h2 id="featured-heading" className="featured-title">
            Complete Fusion Splicer Training
          </h2>
          <p className="featured-description">
            Master the fundamentals of fiber optic splicing with our comprehensive
            training program covering everything from basic setup to advanced
            techniques.
          </p>
          <div className="featured-meta">
            <span className="meta-item">
              <Icons.Clock /> 48 sec
            </span>
          </div>
          <button className="featured-cta">
            Play <Icons.ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

// ============================================
// PLAYLIST CARD COMPONENT
// ============================================
const PlaylistCard = ({ playlist, onPlayVideo }) => {
  return (
    <article className="playlist-card" tabIndex={0}>
      <div
        className="playlist-thumbnail"
        onClick={() => onPlayVideo(playlist.videoSrc)}
        role="button"
        aria-label={`Play ${playlist.title}`}
      >
        <img src={playlist.thumbnail} alt="" loading="lazy" />
        <span className="playlist-duration">{playlist.duration}</span>
      </div>
      <div className="playlist-content">
        <span className="playlist-category">{playlist.category}</span>
        <h3 className="playlist-title">{playlist.title}</h3>
        <div className="playlist-meta"></div>
        <button
          className="playlist-cta"
          onClick={() => onPlayVideo(playlist.videoSrc)}
        >
          Play <Icons.Play />
        </button>
      </div>
    </article>
  );
};

// ============================================
// PLAYLISTS SECTION COMPONENT
// ============================================
const PlaylistsSection = ({ playlists, onPlayVideo }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => scrollEl.removeEventListener("scroll", checkScroll);
    }
  }, [checkScroll]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="playlists-section" aria-labelledby="playlists-heading">
      <div className="playlist-header">
        <h2 id="playlists-heading" className="playlist-title">
          All Training Playlists
          <span className="title-underline"></span>
        </h2>
      </div>

      {/* Desktop Grid */}
      <div className="playlists-grid">
        {playlists.map((playlist) => (
          <PlaylistCard
            key={playlist.id}
            playlist={playlist}
            onPlayVideo={onPlayVideo}
          />
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="playlists-scroll-container">
        <button
          className="scroll-arrow left"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
        >
          <Icons.ChevronLeft />
        </button>

        <div className="playlists-scroll" ref={scrollRef}>
          {playlists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              onPlayVideo={onPlayVideo}
            />
          ))}
        </div>

        <button
          className="scroll-arrow right"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll right"
        >
          <Icons.ChevronRight />
        </button>
      </div>
    </section>
  );
};

// ============================================
// VIDEO MODAL COMPONENT
// ============================================
const VideoModal = ({ isOpen, videoSrc, onClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      className={`video-modal-overlay ${isOpen ? "active" : ""}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <div className="video-modal">
        <button
          className="video-modal-close"
          onClick={onClose}
          ref={closeButtonRef}
          aria-label="Close video"
        >
          <Icons.X />
        </button>
        {isOpen && videoSrc && (
          <video src={videoSrc} controls autoPlay style={{ width: "100%" }} />
        )}
      </div>
    </div>
  );
};

// ============================================
// FLOATING ACTION BUTTON COMPONENT
// ============================================
const FloatingAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-action">
      <div className={`fab-menu ${isOpen ? "active" : ""}`}>
        <button className="fab-menu-item" aria-label="Request support">
          <span className="fab-menu-item-icon">
            <Icons.Headphones />
          </span>
          <span className="fab-menu-item-text">Request Support</span>
        </button>
        <button className="fab-menu-item" aria-label="Request demo">
          <span className="fab-menu-item-icon">
            <Icons.MessageCircle />
          </span>
          <span className="fab-menu-item-text">Request Demo</span>
        </button>
        <button className="fab-menu-item" aria-label="Report issue">
          <span className="fab-menu-item-icon">
            <Icons.AlertCircle />
          </span>
          <span className="fab-menu-item-text">Report Issue</span>
        </button>
      </div>
    </div>
  );
};

// ============================================
// MAIN TRAINING PAGE COMPONENT
// ============================================
const TrainingPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [videoModal, setVideoModal] = useState({ isOpen: false, src: null });
  const [selectedFilters, setSelectedFilters] = useState({
    productLine: [],
  });

  const handleFilterChange = (category, id) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(id)
        ? prev[category].filter((f) => f !== id)
        : [...prev[category], id]
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      productLine: [],
    });
  };

  const handlePlayVideo = (src) => {
    setVideoModal({ isOpen: true, src });
  };

  const handleCloseVideo = () => {
    setVideoModal({ isOpen: false, src: null });
  };

  // Filter playlists based on selected filters
  const filteredPlaylists = playlists.filter((playlist) => {
    const matchesProductLine =
      selectedFilters.productLine.length === 0 ||
      selectedFilters.productLine.some((filterId) => {
        const matchValue = getProductLineMatchValue(filterId);
        return playlist.category.toLowerCase().includes(matchValue);
      });

    return matchesProductLine;
  });

  // Count active filters
  const activeFilterCount = selectedFilters.productLine.length;



  return (
    <div className="training-page">
      <Helmet>
        <title>Learn Fiber Splicing & Testing | Optronix Advanced Technical Guides</title>
        <meta name="description" content=" Explore comprehensive guides on advanced fiber features like NanoTune technology, WLAN setup for splicers, and fiber coating stripping methods. Enhance your technical expertise with Optronix’s educational resources." />
      </Helmet>
      <div className="training-layout">
        {/* Desktop Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />

        <main className="training-main" role="main">
          <div className="page-title-section">
            <h1 className="page-title">Technical Support Through Video Tutorials</h1>
            <p className="page-subtitle">
              Master fiber optic technology with comprehensive training courses,
              tutorials, and technical documentation from Optronix experts.
            </p>
          </div>

          <FeaturedSection onPlayVideo={handlePlayVideo} />

          <PlaylistsSection
            playlists={filteredPlaylists}
            onPlayVideo={handlePlayVideo}
          />
        </main>
      </div>

      {/* Floating Filter Button - Mobile Only */}
      <button
        className="floating-filter-btn"
        onClick={() => setIsMobileFilterOpen(true)}
        aria-label="Open filters"
      >
        <Icons.Filter />
        <span>Filter</span>
        {activeFilterCount > 0 && (
          <span className="filter-count-badge">{activeFilterCount}</span>
        )}
      </button>

      {/* Mobile Filter Modal */}
      <MobileFilterModal
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      <FloatingAction />

      <VideoModal
        isOpen={videoModal.isOpen}
        videoSrc={videoModal.src}
        onClose={handleCloseVideo}
      />
    </div>
  );
};

export default TrainingPage;