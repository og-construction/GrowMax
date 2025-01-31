import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './program.css'; // Import the CSS file
import backgroundImage from '../assets/About2.jpg'; // Import the background image
import { useNavigate } from 'react-router-dom';
import nurturing from '../assets/nurturing.jpeg'
import crafting from '../assets/crafting.jpeg'
import selfworth from '../assets/self-worth.jpeg'
import revitalize from '../assets/revitalize.jpeg'
import unleashing from '../assets/unleasing-leadership.jpeg'
import selfImprovement from '../assets/self-improvement-odyssey.jpeg'
import confidence from '../assets/Comfidance-buster.jpeg'
import ignitingSelfMotivation from '../assets/igniting-self-motivation.jpeg'
import selDescipline from '../assets/self-deciplaned.jpeg'
import igniteYourSpark from '../assets/ignite-your-spark.jpeg'
import selfEfficancy from '../assets/self-efficiancy.jpeg'
import fuelYourInspiration from '../assets/fuel-your-inspiration.jpeg'
import selfEsteem from '../assets/self-esteem-enhancement.jpeg'
import unleashYourPotential from '../assets/unlease-your-potential.jpeg'
import selfAwareness from "../assets/self-wareness.jpeg"
import selfLove from '../assets/self-love.jpeg'
import selfRealization from '../assets/self-realization.jpeg';
import exploringSelf from '../assets/exploring-self.jpeg'
import growthBuilt from '../assets/GrowthBuilt.jpeg'
import masteryInInterview from '../assets/masteryinterview.jpeg'
import aceYouEngineering from '../assets/AceYourEnginnering.jpeg'
import exclusiveTailored from '../assets/ExclusiveTailored.jpeg'
import timeManagement from '../assets/timeManagement.jpeg'
import { baseurl } from '../api'


const Programs = () => {
    const [program1, setProgram1] = useState(null);
    const [program2, setProgram2] = useState(null);
    const [program3, setProgram3] = useState(null);
    const [program4, setProgram4] = useState(null);
    const [program5, setProgram5] = useState(null);
    const [program6, setProgram6] = useState(null);
    const [program7, setProgram7] = useState(null);
    const [program8, setProgram8] = useState(null);
    const [program9, setProgram9] = useState(null);
    const [program10, setProgram10] = useState(null);
    const [program11, setProgram11] = useState(null);
    const [program12, setProgram12] = useState(null);
    const [program13, setProgram13] = useState(null);
    const [program14, setProgram14] = useState(null);
    const [program15, setProgram15] = useState(null);
    const [program16, setProgram16] = useState(null);
    const [program17, setProgram17] = useState(null);
    const [program18, setProgram18] = useState(null);
    const [program19, setProgram19] = useState(null);
    const [program20, setProgram20] = useState(null);
    const [program21, setProgram21] = useState(null);
    const [program22, setProgram22] = useState(null);
    const [program23, setProgram23] = useState(null);
    const [program24, setProgram24] = useState(null);
    const [selectedProgram, setSelectedProgram] = useState(null); // To track the clicked program
    const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
    const [formData, setFormData] = useState({ name: '', mobile: '', email: '' }); // Form state
    const [programs, setPrograms] = useState([]);
    const navigate = useNavigate();


  

    // Add more states for additional programs...

    useEffect(() => {
        const fetchProgram1 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/674019611d6ab1bd1c9c1bc1`);
                setProgram1({ ...response.data, image: nurturing, text: 'Description for Program 1' });
            } catch (error) {
                console.error('Error fetching Program 1:', error);
            }
        };

        const fetchProgram2 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/674019a01d6ab1bd1c9c1bc3`);
                setProgram2({ ...response.data, image: crafting, text: 'Description for Program 2' });
            } catch (error) {
                console.error('Error fetching Program 2:', error);
            }
        };

        const fetchProgram3 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/674019e01d6ab1bd1c9c1bc5`);
                setProgram3({ ...response.data, image: selfworth, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };
        const fetchProgram4 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401a211d6ab1bd1c9c1bc7`);
                setProgram4({ ...response.data, image: revitalize, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };



        const fetchProgram5 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401a441d6ab1bd1c9c1bc9`);
                setProgram5({ ...response.data, image: unleashing, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };

        const fetchProgram6 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401a6c1d6ab1bd1c9c1bcb`);
                setProgram6({ ...response.data, image: selfImprovement, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };

        const fetchProgram7 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401a921d6ab1bd1c9c1bcd`);
                setProgram7({ ...response.data, image: confidence, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };



        const fetchProgram8 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401ab11d6ab1bd1c9c1bcf`);
                setProgram8({ ...response.data, image: ignitingSelfMotivation, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };

        const fetchProgram9 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401ad11d6ab1bd1c9c1bd1`);
                setProgram9({ ...response.data, image: selDescipline, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };

        const fetchProgram10 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401d321d6ab1bd1c9c1bd3`);
                setProgram10({ ...response.data, image: igniteYourSpark, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };

        const fetchProgram11 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401d5b1d6ab1bd1c9c1bd5`);
                setProgram11({ ...response.data, image: selfEfficancy, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };


        const fetchProgram12 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401d791d6ab1bd1c9c1bd7`);
                setProgram12({ ...response.data, image: fuelYourInspiration, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };


        
        const fetchProgram13 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401d9a1d6ab1bd1c9c1bd9`);
                setProgram13({ ...response.data, image: selfEsteem, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };


        const fetchProgram14 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401dcb1d6ab1bd1c9c1bdb`);
                setProgram14({ ...response.data, image: unleashYourPotential, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };



        const fetchProgram15 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401dee1d6ab1bd1c9c1bdd`);
                setProgram15({ ...response.data, image: selfAwareness, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };


        const fetchProgram16 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401e111d6ab1bd1c9c1bdf`);
                setProgram16({ ...response.data, image: selfLove, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };



        const fetchProgram17 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401e3a1d6ab1bd1c9c1be1`);
                setProgram17({ ...response.data, image: selfRealization, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };


        const fetchProgram18 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401e571d6ab1bd1c9c1be3`);
                setProgram18({ ...response.data, image: exploringSelf, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };



        const fetchProgram19 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401e711d6ab1bd1c9c1be5`);
                setProgram19({ ...response.data, image: growthBuilt, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };

        const fetchProgram20 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401e901d6ab1bd1c9c1be7`);
                setProgram20({ ...response.data, image:crafting, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };



        const fetchProgram21 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401eb91d6ab1bd1c9c1be9`);
                setProgram21({ ...response.data,image:timeManagement, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };
        const fetchProgram22 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401ed31d6ab1bd1c9c1beb`);
                setProgram22({ ...response.data, image: masteryInInterview, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };



        const fetchProgram23 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401efd1d6ab1bd1c9c1bed`);
                setProgram23({ ...response.data, image: aceYouEngineering, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };

        const fetchProgram24 = async () => {
            try {
                const response = await axios.get(`${baseurl}/api/programs/67401f201d6ab1bd1c9c1bef`);
                setProgram24({ ...response.data, image: exclusiveTailored, text: 'Description for Program 3' });
            } catch (error) {
                console.error('Error fetching Program 3:', error);
            }
        };

        // Fetch additional programs similarly...

        fetchProgram1();
        fetchProgram2();
        fetchProgram3();
        fetchProgram4();
        fetchProgram5();
        fetchProgram6();
        fetchProgram7();
        fetchProgram8();
        fetchProgram9();
        fetchProgram10();
        fetchProgram11();
        fetchProgram12();
        fetchProgram13();
        fetchProgram14();
        fetchProgram15();
        fetchProgram16();
        fetchProgram17();
        fetchProgram18();
        fetchProgram19();
        fetchProgram20();
        fetchProgram21();
        fetchProgram22();
        fetchProgram23();
        fetchProgram24();
        // Call additional fetch functions here...
    }, []);

    const openModal = (program) => {
        console.log('Selected Program:', program); // Debugging
        setSelectedProgram(program);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProgram(null);
        setFormData({ name: '', mobile: '', email: '' }); // Reset form
    };


    const handleViewDetailsForProgram1 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program-details`, { state: { program: program1 } });
      };

      const handleViewDetailsForProgram2 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program2`, { state: { program: program2 } });
      };

      const handleViewDetailsForProgram3 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program3`, { state: { program: program3 } });
      };
      
      const handleViewDetailsForProgram4 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program4`, { state: { program: program4 } });
      };
      
      const handleViewDetailsForProgram5 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program5`, { state: { program: program5 } });
      };

      const handleViewDetailsForProgram6 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program6`, { state: { program: program6 } });
      };
      
      const handleViewDetailsForProgram7 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program7`, { state: { program: program7 } });
      };
      
      const handleViewDetailsForProgram8 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program8`, { state: { program: program8 } });
      };

      const handleViewDetailsForProgram9 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program9`, { state: { program: program9 } });
      };

      const handleViewDetailsForProgram10 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program10`, { state: { program: program10 } });
      };

      const handleViewDetailsForProgram11 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program11`, { state: { program: program11 } });
      };

      const handleViewDetailsForProgram12 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program12`, { state: { program: program12 } });
      };

      const handleViewDetailsForProgram13 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program13`, { state: { program: program13 } });
      };

      const handleViewDetailsForProgram14 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program14`, { state: { program: program14 } });
      };

      const handleViewDetailsForProgram15 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program15`, { state: { program: program15 } });
      };

      const handleViewDetailsForProgram16 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program16`, { state: { program: program16 } });
      };

      const handleViewDetailsForProgram17 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program17`, { state: { program: program17 } });
      };

      const handleViewDetailsForProgram18 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program18`, { state: { program: program18 } });
      };

      const handleViewDetailsForProgram19 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program19`, { state: { program: program19 } });
      };

      const handleViewDetailsForProgram20 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program20`, { state: { program: program20 } });
      };

      const handleViewDetailsForProgram21 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program21`, { state: { program: program21 } });
      };

      const handleViewDetailsForProgram22 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program22`, { state: { program: program22 } });
      };

      const handleViewDetailsForProgram23 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program23`, { state: { program: program23 } });
      };

      const handleViewDetailsForProgram24 = () => {
        // Navigate to ProgramDetails only for Program 1
        navigate(`/program24`, { state: { program: program24 } });
      };
      
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const payload = {
                name: formData.name,
                mobile: formData.mobile,
                email: formData.email,
                programName: selectedProgram.name,
            };
            
    
            console.log("Payload:", payload);
    
            const response = await axios.post(`${baseurl}/api/user/register`, payload);

    
            if (response.status === 201) {
                alert('You have successfully registered in the program!');
            }
            closeModal();
        } catch (error) {
            console.error('Error registering in program:', error.response?.data || error.message);
            alert('Failed to register. Please try again.');
        }
    };
    



    return (
        <div
            className="programs-section"
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="programs-overlay">
                <h1>Our Programs</h1>
                <p>Explore our various programs designed for growth and success.</p>
                <div className="programs-grid">

                {program1 && (
        <div className="program-card">
          <img src={program1.image} alt={program1.name} className="program-image" />
          <h3>{program1.name}</h3>
          <p>{program1.description}</p>
          <button
            className="program-button"
            onClick={handleViewDetailsForProgram1} // Only Program 1 navigates to ProgramDetails
          >
            View Details
          </button>
        </div>
      )}



                  {/* Program 2 */}
{program2 && (
  <div className="program-card">
    <img src={program2.image} alt={program2.name} className="program-image" />
    <h3>{program2.name}</h3>
    <p>{program2.description}</p>
    <p>{program2.text}</p>
    <button
            className="program-button"
            onClick={handleViewDetailsForProgram2} // Only Program 1 navigates to ProgramDetails
          >
            View Details
          </button>
    <button onClick={() => openModal(program2)}>Book Now</button>
  </div>
)}


                    {/* Program 3 */}
                    {program3 && (
                        <div className="program-card">
                            <img src={program3.image} alt={program3.name} className="program-image" />
                            <h3>{program3.name}</h3>
                            <p>{program3.description}</p>
                            <p>{program3.text}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram3} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                {program4 && (
                        <div className="program-card">
                            <img src={program4.image} alt={program4.name} className="program-image" />
                            <h3>{program4.name}</h3>
                            <p>{program4.description}</p>
                            <p>{program4.text}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram4} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                     {program5 && (
                        <div className="program-card">
                            <img src={program5.image} alt={program5.name} className="program-image" />
                            <h3>{program5.name}</h3>
                            <p>{program5.description}</p>
                            <p>{program5.text}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram5} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}

{program6 && (
                        <div className="program-card">
                            <img src={program6.image} alt={program6.name} className="program-image" />
                            <h3>{program6.name}</h3>
                            <p>{program6.description}</p>
                            <p>{program6.text}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram6} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                    
{program7 && (
                        <div className="program-card">
                            <img src={program7.image} alt={program7.name} className="program-image" />
                            <h3>{program7.name}</h3>
                            <p>{program7.description}</p>
                            <p>{program7.text}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram7} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                    {program8 && (
                        <div className="program-card">
                            <img src={program8.image} alt={program8.name} className="program-image" />
                            <h3>{program8.name}</h3>
                            <p>{program8.description}</p>
                            <p>{program8.text}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram8} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                    {program9 && (
                        <div className="program-card">
                            <img src={program9.image} alt={program9.name} className="program-image" />
                            <h3>{program9.name}</h3>
                            <p>{program9.description}</p>
                            <p>{program9.text}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram9} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                                       {program10 && (
                        <div className="program-card">
                                                        <img src={program10.image} alt={program10.name} className="program-image" />

                            <h3>{program10.name}</h3>
                            <p>{program10.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram10} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                      {program11 && (
                        <div className="program-card">
                            <img src={program11.image} alt={program11.name} className="program-image"/>
                            <h3>{program11.name}</h3>
                            <p>{program11.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram11} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                     {program12 && (
                        <div className="program-card">
                            <img src={program12.image} alt={program12.name} className="program-image"/>
                            <h3>{program12.name}</h3>
                            <p>{program12.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram12} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                    {program13 && (
                        <div className="program-card">
                            <img src={program13.image} alt={program13.name} className="program-image"/>
                            <h3>{program13.name}</h3>
                            <p>{program13.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram13} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                    
                    {program14 && (
                        <div className="program-card">
                          <img src={program14.image} alt={program14.name} className="program-image"/>

                            <h3>{program14.name}</h3>
                            <p>{program14.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram14} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                    {program15 && (
                        <div className="program-card">
                            <img src={program15.image} alt={program15.name} className="program-image"/>
                            <h3>{program15.name}</h3>
                            <p>{program15.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram15} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                      {program16 && (
                        <div className="program-card">
                            <img src={program16.image} alt={program16.name} className="program-image"/>
                            <h3>{program16.name}</h3>
                            <p>{program16.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram16} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                      {program17 && (
                        <div className="program-card">
                            <img src={program17.image} alt={program17.name} className="program-image"/>
                            <h3>{program17.name}</h3>
                            <p>{program17.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram17} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                     {program18 && (
                        <div className="program-card">
                            <img src={program18.image} alt={program18.name} className="program-image"/>
                            <h3>{program18.name}</h3>
                            <p>{program18.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram18} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}

{program19 && (
                        <div className="program-card">
                            <img src={program19.image} alt={program19.name} className="program-image"/>
                            <h3>{program19.name}</h3>
                            <p>{program19.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram19} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                     {program20 && (
                        <div className="program-card">
                            <img src={program20.image} alt={program20.name} className="program-image"/>
                            <h3>{program20.name}</h3>
                            <p>{program20.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram20} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                    {program21 && (
                        <div className="program-card">
                            <img src={program21.image} alt={program21.name} className="program-image"/>
                            <h3>{program21.name}</h3>
                            <p>{program21.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram21} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                     {program22 && (
                        <div className="program-card">
                            <img src={program22.image} alt={program22.name} className="program-image"/>
                            <h3>{program22.name}</h3>
                            <p>{program22.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram22} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                     {program23 && (
                        <div className="program-card">
                            <img src={program23.image} alt={program23.name} className="program-image"/>
                            <h3>{program23.name}</h3>
                            <p>{program23.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram23} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}
                    {program24 && (
                        <div className="program-card">
                            <img src={program24.image} alt={program24.name} className="program-image"/>
                            <h3>{program24.name}</h3>
                            <p>{program24.description}</p>
                            <button
                            className="program-button"
                            onClick={handleViewDetailsForProgram24} // Only Program 1 navigates to ProgramDetails
                        >
                            View Details
                        </button>
                        </div>
                    )}





                    {/* Add more programs similarly... */}
                </div>
            
                {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Book Now - {selectedProgram?.name}</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Mobile:
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <div className="modal-buttons">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={closeModal}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            </div>
        </div>

    );
};

export default Programs;