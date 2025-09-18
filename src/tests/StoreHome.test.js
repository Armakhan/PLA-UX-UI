import React from 'react';
import { render,screen,fireEvent,waitFor} from '@testing-library/react';
import LeftContent from '../components/StoreManagerHome/LeftContent.jsx';
import RightContent from '../components/StoreManagerHome/RightContent.jsx';
import Logocomp from '../components/StoreManagerHome/Logocomponent.jsx';
import Footercomp from '../components/StoreManagerHome/FooterContent.jsx';
import Storemainpage from '../components/StoreManagerHome/StoreHome.jsx';
import MyChallengeContent from '../components/StoreManagerHome/MyChallengeContent';
import ParticipateContent from '../components/StoreManagerHome/ParticipateContent.jsx';
import ParticipateCard from '../components/StoreManagerHome/Participatecard.jsx';
import MyChallengeCard from '../components/StoreManagerHome/MyChallengeCard.jsx';
import {handleViewMoreClick,formatDate} from '../../src/components/StoreManagerHome/Participatecard'; 
import { useNavigate } from 'react-router-dom';
import { CONSTANTLEFTCONTENT } from '../Constants/Constant.js';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
 // Make sure to import the correct path
jest.mock('axios', () => 'axios');

describe('formatDate', () => {
  it('formats the date correctly', () => {
    const dateString = '2023-09-09T18:30:00.000Z';
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe('started on 9th September, 2023');
  });


  it('formats another date correctly', () => {
    const dateString = '2023-10-15T12:00:00.000Z';
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe('started on 15th October, 2023');
  });
});
mockedUsedNavigate.mockImplementation(() => {
    return {
      navigate: (path) => {
        
        expect(path).toEqual(`/enrollpage`);
      }
    };
});
test('renders the MyChallengeContent', () => {
  render(<MyChallengeContent/>);
});
test('renders the LeftContent', () => {
    render(<LeftContent/>);
});
test('renders the RightContent', () => {
    render(<RightContent/>);
});
test('renders the Logocomp', () => {
    render(<Logocomp/>);
});
test('renders the Footercomp', () => {
    render(<Footercomp/>);
});
test('renders the ParticipateContent', () => {
    render(<ParticipateContent/>);
});
test('renders the MyChallengeCard', () => {
  render(<MyChallengeCard/>);
});
test('renders the ParticipateCard', () => {
  render(<ParticipateCard/>);
});
test('renders the Storemainpage', () => {
  render(<Storemainpage/>);
});

// const formatDate = require('./path/to/formatDate'); // Adjust the path
// describe('formatDatedata', () => {
//   const mockContent = {
//     TH: 'th',
//     ST: 'st',
//     ND: 'nd',
//     RD: 'rd',
//   };

//   const mockDate = new Date('2023-08-31T12:00:00'); // A date for testing

//   it('formats the date correctly for 1st, 21st, and 31st days', () => {
//     const formatDate = require('../components/StoreManagerHome/MyChallengeCard/MyChallengeCard.jsx/formatDate');
//     const formattedDate = formatDate(mockDate.toISOString(), mockContent);
//     expect(formattedDate).toBe('31st August, 2023');
//   });

//   it('formats the date correctly for 2nd and 22nd days', () => {
//     mockDate.setDate(2);
//     const formattedDate = formatDate(mockDate.toISOString(), mockContent);
//     expect(formattedDate).toBe('2nd August, 2023');
//   });

//   it('formats the date correctly for 3rd and 23rd days', () => {
//     mockDate.setDate(3);
//     const formattedDate = formatDate(mockDate.toISOString(), mockContent);
//     expect(formattedDate).toBe('3rd August, 2023');
//   });

//   // You can add more test cases to cover different scenarios
// });
// describe('Storemanagerhome', () => {
//   it('displays', async () => {
//     render(<ParticipateCard />);
//     const NextButton = screen.getByText('View More');
//     fireEvent.click(NextButton);
//     await waitFor(() => {
//       expect(navigate).toHaveBeenCalledWith("/enrollpage");
//     });
//   });
// })
// Mocking the navigate function
// test("Clicking View More button redirects to enroll page", () => {
//   // Render the component
//   const { getByText } = render(<ParticipateCard />);
//   const viewMoreButton = screen.getByText("View More");
//   fireEvent.click(viewMoreButton);

//   // Assert that the navigation occurred correctly
//   expect(navigate).toHaveBeenCalledWith("/enrollpage");
// });
const navigate = jest.fn();

test("Function is invoked and navigates correctly", () => {
  handleViewMoreClick();
  expect(navigate).toHaveBeenCalledWith("/enrollpage");
});


test("Navigates to the correct URL", () => {
  handleViewMoreClick();
  expect(navigate).toHaveBeenCalledWith("/enrollpage");
  expect(navigate).not.toHaveBeenCalledWith("/wrongurl");
});


test("Function can be invoked multiple times", () => {
  handleViewMoreClick();
  handleViewMoreClick();
  handleViewMoreClick();
  expect(navigate).toHaveBeenCalledTimes(3);
});


// Mock CountdownCircleTimer component
// jest.mock('CountdownCircleTimer', () => {
//   return function MockCountdownCircleTimer(props) {
//     return <div>Mock Countdown: {props.children}</div>;
//   };
// });

// describe('CountdownCircleTimer', () => {
//   it('renders countdown timer when enroll status is ENROLL', () => {
//     const mockParticipate = {
//       enrollstatus: 'ENROLL',
//     };

//     const { getByText } = render(<ParticipateCard participate={mockParticipate} />);

//     const countdownText = screen.getByText(/Mock Countdown/);
//     expect(countdownText).toBeInTheDocument();
//   });

//   it('does not render countdown timer when enroll status is not ENROLL', () => {
//     const mockParticipate = {
//       enrollstatus: 'SOME_OTHER_STATUS',
//     };

//     const { queryByText } = render(<ParticipateCard participate={mockParticipate} />);

//     const countdownText = screen.queryByText(/Mock Countdown/);
//     expect(countdownText).toBeNull();
//   });

//   // You can write more test cases for specific behavior, styles, etc.
// });

// test('renders the component', () => {
//     render(<MyCurrentContent/>);
// });


describe('MyChallengeContent', () => {
  it('renders published challenges correctly', () => {
    const CONSTANTLEFTCONTENT = {
      PUBLISHED: 'published',
      DRAFT: 'draft',
    };

    const MyChallenge = [
      { status: 'published' },
      { status: 'draft' },
    ];

    const myselectedChallange = CONSTANTLEFTCONTENT.PUBLISHED;

    render(
      <MyChallengeContent MyChallenge={MyChallenge} myselectedChallange={myselectedChallange} />
    );

    const publishedCard = screen.getByTestId('published-card'); 
    const draftCard = screen.queryByTestId('draft-card'); 

    expect(publishedCard).toBeInTheDocument();
    expect(draftCard).toBeNull();
  });

  it('renders draft challenges correctly', () => {
    const CONSTANTLEFTCONTENT = {
      PUBLISHED: 'published',
      DRAFT: 'draft',
    };

    const MyChallenge = [
      { status: 'published' },
      { status: 'draft' },
    ];

    const myselectedChallange = CONSTANTLEFTCONTENT.DRAFT;
    render(
      <MyChallengeContent MyChallenge={MyChallenge} myselectedChallange={myselectedChallange} />
    );

    const publishedCard = screen.queryByTestId('published-card'); 
    const draftCard = screen.getByTestId('draft-card'); 

    expect(publishedCard).toBeNull();
    expect(draftCard).toBeInTheDocument();
  });
});

describe('SwitchComponent', () => {
  it('renders "Option A" when value is "A"', () => {
    render(<ParticipateContent value="ongoing" />);
    expect(screen.getByText('ongoing')).toBeInTheDocument();
  });

  it('renders "Option B" when value is "B"', () => {
    render(<ParticipateContent value="upcoming" />);
    expect(screen.getByText('upcoming')).toBeInTheDocument();
  });

  it('renders "Unknown Option" for unknown values', () => {
    render(<ParticipateContent value="historical" />);
    expect(screen.getByText('historical')).toBeInTheDocument();
  });
});



//increased coverage for testcase for MyChallengeContent file line 11-35
describe('MyChallengeContent', () => {
  it('renders MyChallengeCard for PUBLISHED challenge', () => {
    const settabDepend = [
      { status: CONSTANTLEFTCONTENT.PUBLISHED },
      { status: CONSTANTLEFTCONTENT.DRAFT },
    ];
    const myselectedChallange = CONSTANTLEFTCONTENT.PUBLISHED;

    render(
      <MyChallengeContent
        myselectedChallange={myselectedChallange}
        settabDepend={settabDepend}
      />
    );

    // Ensure that MyChallengeCard is rendered for PUBLISHED challenge
    const publishedCard = screen.getByText('Published Challenge Card Text'); // Replace with actual text/content
    expect(publishedCard).toBeInTheDocument();

    // Ensure that MyChallengeCard is not rendered for DRAFT challenge
    const draftCard = screen.queryByText('Draft Challenge Card Text'); // Replace with actual text/content
    expect(draftCard).not.toBeInTheDocument();
  });

  it('renders MyChallengeCard for DRAFT challenge', () => {
    const settabDepend = [
      { status: CONSTANTLEFTCONTENT.PUBLISHED },
      { status: CONSTANTLEFTCONTENT.DRAFT },
    ];
    const myselectedChallange = CONSTANTLEFTCONTENT.DRAFT;

    render(
      <MyChallengeContent
        myselectedChallange={myselectedChallange}
        settabDepend={settabDepend}
      />
    );

    // Ensure that MyChallengeCard is rendered for DRAFT challenge
    const draftCard = screen.getByText('Draft Challenge Card Text'); // Replace with actual text/content
    expect(draftCard).toBeInTheDocument();

    // Ensure that MyChallengeCard is not rendered for PUBLISHED challenge
    const publishedCard = screen.queryByText('Published Challenge Card Text'); // Replace with actual text/content
    expect(publishedCard).not.toBeInTheDocument();
  });

  it('renders MyChallengeCard for default challenge', () => {
    const settabDepend = [{ status: 'SomeOtherStatus' }];
    const myselectedChallange = 'SomeOtherChallenge';

    render(
      <MyChallengeContent
        myselectedChallange={myselectedChallange}
        settabDepend={settabDepend}
      />
    );

    // Ensure that MyChallengeCard is rendered for the default case
    const defaultCard = screen.getByText('Default Challenge Card Text'); // Replace with actual text/content
    expect(defaultCard).toBeInTheDocument();
  });
});


//NOt needed for now 2-09-2023
// describe('ParticipateContent', () => {
//     const CONSTANTLEFTCONTENT = {
//       ONGOING: 'ongoing',
//       UPCOMING: 'upcoming',
//       ENROLLED: 'enrolled',
//       HISTORICAL: 'historical',
//     };
  
//     const MyChallenge = [
//       { status: 'draft', /* other properties */ },
//       { status: 'published', /* other properties */ },
//     ];
  
//     it('renders ongoing challenges correctly', () => {
//       const selectedChallange = CONSTANTLEFTCONTENT.ONGOING;
  
//    render(
//         <ParticipateContent MyChallenge={MyChallenge} selectedChallange={selectedChallange} />
//       );
  
//       const ongoingCard = screen.getByTestId('ongoing-card'); // Update with your actual selector
//       const otherCards = screen.queryByTestId('other-cards'); // Update with your actual selector
  
//       expect(ongoingCard).toBeInTheDocument();
//       expect(otherCards).toBeNull();
//     });
  
//     it('renders upcoming challenges correctly', () => {
//       const selectedChallange = CONSTANTLEFTCONTENT.UPCOMING;
  
//       render(<ParticipateContent MyChallenge={MyChallenge} selectedChallange={selectedChallange} />);
//       const upcomingCard = screen.getByTestId('upcoming-card'); // Update with your actual selector
//       const otherCards = screen.queryByTestId('other-cards'); // Update with your actual selector
  
//       expect(upcomingCard).toBeInTheDocument();
//       expect(otherCards).toBeNull();
//     });
  
//     it('renders enrolled challenges correctly', () => {
//       const selectedChallange = CONSTANTLEFTCONTENT.ENROLLED;
  
//     render(
//         <ParticipateContent MyChallenge={MyChallenge} selectedChallange={selectedChallange} />
//       );
  
//       const enrolledCard = screen.getByTestId('enrolled-card'); // Update with your actual selector
//       const otherCards = screen.queryByTestId('other-cards'); // Update with your actual selector
  
//       expect(enrolledCard).toBeInTheDocument();
//       expect(otherCards).toBeNull();
//     });
  
//     it('renders historical challenges correctly', () => {
//       const selectedChallange = CONSTANTLEFTCONTENT.HISTORICAL;
  
//      render(
//         <ParticipateContent MyChallenge={MyChallenge} selectedChallange={selectedChallange} />
//       );
  
//       const historicalCard = screen.getByTestId('historical-card'); // Update with your actual selector
//       const otherCards = screen.queryByTestId('other-cards'); // Update with your actual selector
  
//       expect(historicalCard).toBeInTheDocument();
//       expect(otherCards).toBeNull();
//     });
//   });
  

//increased coverage for ParticipateContent in line 11-58.  



describe('ParticipateContent', () => {
  it('renders ParticipateCard for ONGOING challenge', () => {
    const setpartdepend = [
      { status: CONSTANTLEFTCONTENT.ONGOING },
      { status: CONSTANTLEFTCONTENT.UPCOMING },
    ];
    const selectedChallange = CONSTANTLEFTCONTENT.ONGOING;

    render(
      <ParticipateContent
        selectedChallange={selectedChallange}
        setpartdepend={setpartdepend}
      />
    );

    // Ensure that ParticipateCard is rendered for ONGOING challenge
    const ongoingCard = screen.getByText('Ongoing Challenge Card Text'); // Replace with actual text/content
    expect(ongoingCard).toBeInTheDocument();

    // Ensure that ParticipateCard is not rendered for UPCOMING challenge
    const upcomingCard = screen.queryByText('Upcoming Challenge Card Text'); // Replace with actual text/content
    expect(upcomingCard).not.toBeInTheDocument();
  });

  // Add similar test cases for other challenge types (UPCOMING, ENROLLED, HISTORICAL) as needed.

  it('renders ParticipateCard for default challenge', () => {
    const setpartdepend = [{ status: 'SomeOtherStatus' }];
    const selectedChallange = 'SomeOtherChallenge';

    render(
      <ParticipateContent
        selectedChallange={selectedChallange}
        setpartdepend={setpartdepend}
      />
    );

    // Ensure that ParticipateCard is rendered for the default case
    const defaultCard = screen.getByText('Default Challenge Card Text'); // Replace with actual text/content
    expect(defaultCard).toBeInTheDocument();
  });
});


//increased coverage for line useNavigate(/enrollpage) in Participatecard file.
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('ParticipateCard', () => {
  it('navigates to "/enrollpage" when "View More" button is clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate); // Mock useNavigate

    const participate = {
      id: 1,
      challengename: 'Sample Challenge',
      enrollstatus: 'ENROLL',
      daysleft: 5,
      startdate: '2023-09-10',
      winner: 'John Doe',
    };

    render(<ParticipateCard participate={participate} />);

    // Find the "View More" button and click it
    const viewMoreButton = screen.getByText('View More');
    fireEvent.click(viewMoreButton);

    // Expect the navigate function to be called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/enrollpage');
  });
});

//increased coverage for line useNavigate(/enrollpage) in MyChallengeCard file.
describe('MyChallengeCard', () => {
  it('navigates to "/enrollpage" when "View Details" button is clicked', () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate); // Mock useNavigate

    const mychallenge = {
      id: 1,
      challengename: 'Sample Challenge',
      status: 'PUBLISHED',
      startdate: '2023-09-10',
      winner: 'John Doe',
    };

    render(<MyChallengeCard mychallenge={mychallenge} />);

    // Find the "View Details" button and click it
    const viewDetailsButton = screen.getByText('View Details');
    fireEvent.click(viewDetailsButton);

    // Expect the navigate function to be called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/enrollpage');
  });
});


//for MychallengeCard if else branch
describe('MyChallengeContent', () => {
  it('renders MyChallengeCard for PUBLISHED challenges', () => {
    const settabDepend = [
      { status: CONSTANTLEFTCONTENT.PUBLISHED, id: 1 },
      { status: CONSTANTLEFTCONTENT.DRAFT, id: 2 },
    ];
    const myselectedChallange = CONSTANTLEFTCONTENT.PUBLISHED;

    render(
      <MyChallengeContent
        myselectedChallange={myselectedChallange}
        settabDepend={settabDepend}
      />
    );

    // Expect MyChallengeCard to be rendered for PUBLISHED challenges
    const publishedCard1 = screen.getByTestId('myChallengeCard');
    const publishedCard2 = screen.getByTestId('myChallengeCard');

    expect(publishedCard1).toBeInTheDocument();
    expect(publishedCard2).toBeInTheDocument();
  });

  it('renders MyChallengeCard for DRAFT challenges', () => {
    const settabDepend = [
      { status: CONSTANTLEFTCONTENT.PUBLISHED, id: 1 },
      { status: CONSTANTLEFTCONTENT.DRAFT, id: 2 },
    ];
    const myselectedChallange = CONSTANTLEFTCONTENT.DRAFT;

    render(
      <MyChallengeContent
        myselectedChallange={myselectedChallange}
        settabDepend={settabDepend}
      />
    );

    // Expect MyChallengeCard to be rendered for DRAFT challenges
    const draftCard = screen.getByTestId('myChallengeCard');

    expect(draftCard).toBeInTheDocument();
  });

  it('renders MyChallengeCard for default challenge', () => {
    const settabDepend = [
      { status: 'SomeOtherStatus', id: 1 },
      { status: 'SomeOtherStatus', id: 2 },
    ];
    const myselectedChallange = 'SomeOtherChallenge';

    render(
      <MyChallengeContent
        myselectedChallange={myselectedChallange}
        settabDepend={settabDepend}
      />
    );

    // Expect MyChallengeCard to be rendered for the default case
    const defaultCard1 = screen.getByTestId('myChallengeCard');
    const defaultCard2 = screen.getByTestId('myChallengeCard');

    expect(defaultCard1).toBeInTheDocument();
    expect(defaultCard2).toBeInTheDocument();
  });
});

//testcase for ParticipateCOntent.jsx 25-55

describe('ParticipateContent', () => {
  it('renders ParticipateCard for ONGOING challenges', () => {
    const setpartdepend = [
      { status: CONSTANTLEFTCONTENT.ONGOING, id: 1 },
      { status: CONSTANTLEFTCONTENT.DRAFT, id: 2 },
    ];
    const selectedChallange = CONSTANTLEFTCONTENT.ONGOING;

    render(
      <ParticipateContent
        selectedChallange={selectedChallange}
        setpartdepend={setpartdepend}
      />
    );

    // Expect ParticipateCard to be rendered for ONGOING challenges
    const ongoingCard1 = screen.getByTestId('participateCard');
    const ongoingCard2 = screen.getByTestId('participateCard');

    expect(ongoingCard1).toBeInTheDocument();
    expect(ongoingCard2).toBeInTheDocument();
  });

  it('renders ParticipateCard for UPCOMING challenges', () => {
    const setpartdepend = [
      { status: CONSTANTLEFTCONTENT.ONGOING, id: 1 },
      { status: CONSTANTLEFTCONTENT.UPCOMING, id: 2 },
    ];
    const selectedChallange = CONSTANTLEFTCONTENT.UPCOMING;

    render(
      <ParticipateContent
        selectedChallange={selectedChallange}
        setpartdepend={setpartdepend}
      />
    );

    // Expect ParticipateCard to be rendered for UPCOMING challenges
    const upcomingCard2 = screen.getByTestId('participateCard');

    expect(upcomingCard2).toBeInTheDocument();
  });

  it('renders ParticipateCard for ENROLLED challenges', () => {
    const setpartdepend = [
      { status: CONSTANTLEFTCONTENT.ENROLL, enrollstatus: CONSTANTLEFTCONTENT.ENROLL, id: 1 },
      { status: CONSTANTLEFTCONTENT.DRAFT, id: 2 },
    ];
    const selectedChallange = CONSTANTLEFTCONTENT.ENROLLED;

    render(
      <ParticipateContent
        selectedChallange={selectedChallange}
        setpartdepend={setpartdepend}
      />
    );

    // Expect ParticipateCard to be rendered for ENROLLED challenges
    const enrolledCard1 = screen.getByTestId('participateCard');

    expect(enrolledCard1).toBeInTheDocument();
  });

  it('renders ParticipateCard for HISTORICAL challenges', () => {
    const setpartdepend = [
      { status: CONSTANTLEFTCONTENT.HISTORICAL, id: 1 },
      { status: CONSTANTLEFTCONTENT.DRAFT, id: 2 },
    ];
    const selectedChallange = CONSTANTLEFTCONTENT.HISTORICAL;

    render(
      <ParticipateContent
        selectedChallange={selectedChallange}
        setpartdepend={setpartdepend}
      />
    );

    // Expect ParticipateCard to be rendered for HISTORICAL challenges
    const historicalCard1 = screen.getByTestId('participateCard');

    expect(historicalCard1).toBeInTheDocument();
  });

  it('renders ParticipateCard for default challenge', () => {
    const setpartdepend = [
      { status: 'SomeOtherStatus', id: 1 },
      { status: 'SomeOtherStatus', id: 2 },
    ];
    const selectedChallange = 'SomeOtherChallenge';

    render(
      <ParticipateContent
        selectedChallange={selectedChallange}
        setpartdepend={setpartdepend}
      />
    );

    // Expect ParticipateCard to be rendered for the default case
    const defaultCard1 = screen.getByTestId('participateCard');
    const defaultCard2 = screen.getByTestId('participateCard');

    expect(defaultCard1).toBeInTheDocument();
    expect(defaultCard2).toBeInTheDocument();
  });
});