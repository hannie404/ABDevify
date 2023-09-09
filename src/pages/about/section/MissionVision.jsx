import React from 'react';
import { missionvision } from '../../../assets/images';
import { Heading } from '../../../components/ui';

const MissionVision = () => {
    return (
        <section className="container mx-auto px-6 py-20 lg:py-32">
            <div className="grid gap-y-8 lg:grid-cols-2 lg:grid-rows-2">
                <section className="space-y-4 text-center lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:text-start lg:text-2xl lg:leading-9">
                    <Heading tag="h2">MISSION</Heading>
                    <p className="text-secondary-50/70">
                        To provide cost-effective and high-quality IT solutions that best define the
                        requirements of our clients while ensuring that we continue to provide
                        career and skill advancement opportunities to our employees.
                    </p>
                </section>

                <div className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
                    <img className="" src={missionvision} alt="missionvision" />
                </div>

                <section className="space-y-4 text-center lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 lg:text-start lg:text-2xl lg:leading-9">
                    <Heading tag="h2">VISION</Heading>
                    <p className="text-secondary-50/70">
                        To be the most trusted offshore IT company that markets one-stop software
                        development services globally and provides more job opportunities to
                        Filipino people.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default MissionVision;
