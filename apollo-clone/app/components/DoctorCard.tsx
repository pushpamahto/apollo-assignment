import React from 'react';

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: number;
  qualifications: string;
  location: string;
  clinic: string;
  patientCount?: number;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialization,
  experience,
  qualifications,
  location,
  clinic,
  patientCount,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">{specialization}</p>
          <p className="text-gray-500 text-sm mt-1">
            {experience} YEARS - {qualifications}
          </p>
          <p className="text-gray-700 mt-2">{location}</p>
          <p className="text-gray-600 text-sm">{clinic}</p>
        </div>
        {patientCount && (
          <div className="bg-blue-50 px-2 py-1 rounded text-blue-700 text-xs">
            📖 {patientCount}+ Patients
          </div>
        )}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;