import React from 'react';
import Header from '@/components/Header';
import Filters from '@/components/Filters';
import DoctorCard from '@/components/DoctorCard';

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  experience: number;
  qualifications: string;
  location: string;
  clinic: string;
  patientCount?: number;
}

const fetchDoctors = async (searchParams: { [key: string]: string }) => {
  const params = new URLSearchParams(searchParams);
  const res = await fetch(`http://localhost:3000/api/doctors?${params.toString()}`);
  if (!res.ok) {
    throw new Error('Failed to fetch doctors');
  }
  return res.json();
};

export default async function SpecialtyPage({
  params,
  searchParams,
}: {
  params: { specialty: string };
  searchParams: { [key: string]: string };
}) {
  const { doctors, total } = await fetchDoctors(searchParams);
  const specialtyName = params.specialty.split('-').join(' ');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <Filters />
          </div>
          
          <div className="md:w-3/4">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Consult {specialtyName} Online - Internal Medicine Specialists
            </h1>
            <p className="text-gray-600 mb-6">({total} doctors)</p>
            
            <div className="space-y-4">
              {doctors.map((doctor: Doctor) => (
                <DoctorCard
                  key={doctor._id}
                  name={doctor.name}
                  specialization={doctor.specialization}
                  experience={doctor.experience}
                  qualifications={doctor.qualifications}
                  location={doctor.location}
                  clinic={doctor.clinic}
                  patientCount={doctor.patientCount}
                />
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Need help consult the right doctor?</h3>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Call +91-80402458073 to book instantly</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}