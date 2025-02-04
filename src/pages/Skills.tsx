// Local
import Container from '@/components/Container';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
   return (
      <Container>
         <div className="mx-auto max-w-5xl pb-10 px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <Card>
                  <CardContent className="py-8 px-8">
                     <div className="flex items-center mb-3">
                        <div className="h-14 w-14 rounded-2xl bg-primary flex justify-center items-center">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={28}
                              height={21}
                              fill="none"
                           >
                              <path
                                 fill="#000"
                                 fillRule="evenodd"
                                 d="M16.585 1.016c.544.152.861.716.709 1.26l-4.77 17.035a1.022 1.022 0 1 1-1.968-.551l4.77-17.036c.152-.543.716-.86 1.26-.708ZM7.493 4.684c.399.4.399 1.047 0 1.446l-4.048 4.047 4.048 4.047a1.022 1.022 0 0 1-1.446 1.446l-4.77-4.77c-.399-.4-.399-1.047 0-1.446l4.77-4.77c.4-.399 1.046-.399 1.446 0ZM21.038 4.684c.4-.399 1.047-.399 1.446 0l4.77 4.77c.399.4.399 1.047 0 1.446l-4.77 4.77a1.022 1.022 0 1 1-1.446-1.446l4.047-4.047-4.047-4.047c-.399-.4-.399-1.047 0-1.446Z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </div>

                        <h4 className="font-semibold text-xl ml-4">
                           Coding
                        </h4>
                     </div>

                     <p>
                        Javascript is my favourite language to code with. I can use it to frontend and backend along with a typescript complier to catch any error before runtime.
                     </p>
                  </CardContent>
               </Card>

               <Card>
                  <CardContent className="py-8 px-8">
                     <div className="flex items-center mb-3">
                        <div className="h-14 w-14 rounded-2xl bg-primary flex justify-center items-center">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={26}
                              fill="none"
                           >
                              <path
                                 fill="#000"
                                 fillRule="evenodd"
                                 d="M5 2a3 3 0 1 0 0 6h3V2H5Zm-3.536-.536A5 5 0 0 1 5 0h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a5 5 0 0 1-3.536-8.536Z"
                                 clipRule="evenodd"
                              />
                              <path
                                 fill="#000"
                                 fillRule="evenodd"
                                 d="M13 2a3 3 0 0 1 0 6h-3V2h3Zm3.535-.536A5 5 0 0 0 13 0H9a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a5 5 0 0 0 3.535-8.536Z"
                                 clipRule="evenodd"
                              />
                              <path
                                 fill="#000"
                                 fillRule="evenodd"
                                 d="M5 10a3 3 0 0 0 0 6h3v-6H5Zm-3.536-.536A5 5 0 0 1 5 8h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a5 5 0 0 1-3.536-8.536Z"
                                 clipRule="evenodd"
                              />
                              <path
                                 fill="#000"
                                 fillRule="evenodd"
                                 d="M5 18a3 3 0 1 0 3 3v-3H5Zm-3.536-.535A5 5 0 0 1 5 16h4a1 1 0 0 1 1 1v4a5 5 0 1 1-8.536-3.535Z"
                                 clipRule="evenodd"
                              />
                              <path
                                 fill="#000"
                                 fillRule="evenodd"
                                 d="M10 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm3-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </div>

                        <h4 className="font-semibold text-xl ml-4">Figma</h4>
                     </div>

                     <p>
                        I have been using figma since its early days. It is my go to for wireframing and demoing.
                     </p>
                  </CardContent>
               </Card>

               <Card>
                  <CardContent className="py-8 px-8">
                     <div className="flex items-center mb-3">
                        <div className="h-14 w-14 rounded-2xl bg-primary flex justify-center items-center">
                           <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.0178833 0.999965C0.0178833 0.457543 0.457604 0.0178223 1.00003 0.0178223H8.85717C9.39959 0.0178223 9.83931 0.457543 9.83931 0.999965V14.0178H24.5715C25.1139 14.0178 25.5536 14.4575 25.5536 15V22C25.5536 22.5424 25.1139 22.9821 24.5715 22.9821H1.00003C0.457604 22.9821 0.0178833 22.5424 0.0178833 22V0.999965ZM1.98217 1.98211V21.0178H23.5893V15.9821H8.85717C8.31475 15.9821 7.87503 15.5424 7.87503 15V1.98211H1.98217Z" fill="black" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.0952 18.6844C14.6377 18.6844 15.0774 19.1242 15.0774 19.6666V21.9999C15.0774 22.5423 14.6377 22.9821 14.0952 22.9821C13.5528 22.9821 13.1131 22.5423 13.1131 21.9999V19.6666C13.1131 19.1242 13.5528 18.6844 14.0952 18.6844Z" fill="black" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M8.85708 18.6844C9.3995 18.6844 9.83922 19.1242 9.83922 19.6666V21.9999C9.83922 22.5423 9.3995 22.9821 8.85708 22.9821C8.31466 22.9821 7.87494 22.5423 7.87494 21.9999V19.6666C7.87494 19.1242 8.31466 18.6844 8.85708 18.6844Z" fill="black" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.0178223 5.66677C0.0178223 5.12435 0.457543 4.68463 0.999965 4.68463H3.61901C4.16144 4.68463 4.60116 5.12435 4.60116 5.66677C4.60116 6.2092 4.16144 6.64892 3.61901 6.64892H0.999965C0.457543 6.64892 0.0178223 6.2092 0.0178223 5.66677Z" fill="black" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.0178223 10.3336C0.0178223 9.79116 0.457543 9.35144 0.999965 9.35144H3.61901C4.16144 9.35144 4.60116 9.79116 4.60116 10.3336C4.60116 10.876 4.16144 11.3157 3.61901 11.3157H0.999965C0.457543 11.3157 0.0178223 10.876 0.0178223 10.3336Z" fill="black" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.0178223 14.9998C0.0178223 14.4574 0.457543 14.0177 0.999965 14.0177H3.61901C4.16144 14.0177 4.60116 14.4574 4.60116 14.9998C4.60116 15.5423 4.16144 15.982 3.61901 15.982H0.999965C0.457543 15.982 0.0178223 15.5423 0.0178223 14.9998Z" fill="black" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M19.3333 18.6844C19.8758 18.6844 20.3155 19.1242 20.3155 19.6666V21.9999C20.3155 22.5423 19.8758 22.9821 19.3333 22.9821C18.7909 22.9821 18.3512 22.5423 18.3512 21.9999V19.6666C18.3512 19.1242 18.7909 18.6844 19.3333 18.6844Z" fill="black" />
                           </svg>
                        </div>

                        <h4 className="font-semibold text-xl ml-4">Wireframing</h4>
                     </div>

                     <p>
                        By hand is best as you can work at the speed of thought. Using a thick pen can help me focus on the big picture instead of the details.
                     </p>
                  </CardContent>
               </Card>

               <Card>
                  <CardContent className="py-8 px-8">
                     <div className="flex items-center mb-3">
                        <div className="h-14 w-14 rounded-2xl bg-primary flex justify-center items-center">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12.7044 6.16301L6.42108 8.75029L2.00223 22.0069L15.608 17.962L17.8318 11.2906L12.7044 6.16301ZM6.44716 8.67204C6.44719 8.67195 6.44713 8.67213 6.44716 8.67204ZM12.1294 4.45113C12.7347 4.20192 13.4306 4.34105 13.8936 4.80393L19.1846 10.0952C19.1846 10.0952 19.1846 10.0952 19.1846 10.0952C19.6187 10.5293 19.7708 11.1717 19.5764 11.7547C19.5764 11.7547 19.5765 11.7546 19.5764 11.7547L17.2877 18.6208C17.1204 19.1226 16.7189 19.5115 16.2114 19.6624L2.18396 23.8326C0.926618 24.2064 -0.231587 23.0103 0.183362 21.7655L4.73775 8.10227C4.73775 8.10226 4.73775 8.10227 4.73775 8.10227C4.88679 7.65514 5.22297 7.29498 5.65876 7.11554C5.65876 7.11554 5.65875 7.11555 5.65876 7.11554L12.1294 4.45113Z" fill="black" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M9.73135 14.2325C10.0832 14.5844 10.0832 15.1548 9.73135 15.5066L2.08667 23.1514C1.73484 23.5032 1.1644 23.5032 0.81256 23.1514C0.460722 22.7995 0.46072 22.2291 0.812556 21.8773L8.45723 14.2325C8.80907 13.8807 9.37951 13.8807 9.73135 14.2325Z" fill="black" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M15.6774 1.06664C16.9675 -0.223385 19.0591 -0.223385 20.3492 1.06664L22.8974 3.61489C24.1874 4.90496 24.1874 6.99656 22.8974 8.28662L19.4997 11.6843C19.1479 12.0362 18.5774 12.0362 18.2256 11.6843C17.8737 11.3325 17.8738 10.762 18.2256 10.4102L21.6233 7.01255C21.6233 7.01254 21.6233 7.01256 21.6233 7.01255C22.2096 6.42615 22.2096 5.47538 21.6233 4.88898L19.0751 2.3408C19.0751 2.34079 19.0751 2.34081 19.0751 2.3408C18.4887 1.75442 17.538 1.75439 16.9515 2.34077C16.9515 2.34078 16.9515 2.34077 16.9515 2.34077L13.5539 5.73841C13.2021 6.09025 12.6316 6.09026 12.2798 5.73842C11.9279 5.38659 11.9279 4.81615 12.2798 4.46431L15.6774 1.06664Z" fill="black" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M8.45742 11.6842C9.51292 10.6286 11.2243 10.6287 12.2798 11.6842C13.3351 12.7397 13.3353 14.451 12.2798 15.5065C11.2243 16.562 9.51299 16.562 8.45749 15.5065C8.45747 15.5065 8.45751 15.5065 8.45749 15.5065M8.45742 11.6842C7.40199 12.7397 7.40196 14.4511 8.45749 15.5065ZM11.0057 12.9582C10.6538 12.6064 10.0833 12.6065 9.73158 12.9583C9.37971 13.3101 9.37961 13.8808 9.73135 14.2325C10.0831 14.5843 10.6539 14.5842 11.0057 14.2324C11.3574 13.8807 11.3574 13.3101 11.0057 12.9582C11.0056 12.9582 11.0057 12.9582 11.0057 12.9582Z" fill="black" />
                           </svg>
                        </div>

                        <h4 className="font-semibold text-xl ml-4">Graphic Design</h4>
                     </div>

                     <p>
                        My first job was graphic design. I have a good understanding of the 7 principles of design. If required I can come up competent designs.
                     </p>
                  </CardContent>
               </Card>

               <Card>
                  <CardContent className="py-8 px-8">
                     <div className="flex items-center mb-3">
                        <div className="h-14 w-14 rounded-2xl bg-primary flex justify-center items-center">
                           <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M19.2801 0.981689C19.5502 0.981689 19.8091 1.08897 20.0001 1.27993L26.72 7.99994C27.1177 8.39759 27.1177 9.0423 26.72 9.43994L9.83782 26.3222C9.39211 26.768 8.7877 27.0182 8.1577 27.0182H2.00005C1.43769 27.0182 0.981812 26.5623 0.981812 25.9999V19.8423C0.981812 19.2123 1.23208 18.6079 1.67769 18.1623M1.67769 18.1623L14.7201 5.11994L18.5601 1.27993C18.7511 1.08897 19.01 0.981689 19.2801 0.981689M15.4401 7.27994L3.11769 19.6023C3.05414 19.6659 3.01828 19.7523 3.01828 19.8423V24.9817H8.1577C8.24784 24.9817 8.33407 24.9459 8.39759 24.8824L20.7201 12.5599L15.4401 7.27994ZM22.1601 11.1199L24.56 8.71993L19.2801 3.43993L16.8801 5.83993L22.1601 11.1199Z" fill="black" />
                           </svg>
                        </div>

                        <h4 className="font-semibold text-xl ml-4">Sketching</h4>
                     </div>

                     <p>
                        One of my many pass times. Helps me to relax.
                     </p>
                  </CardContent>
               </Card>
            </div>
         </div>
      </Container >
   );
};

export default Skills;