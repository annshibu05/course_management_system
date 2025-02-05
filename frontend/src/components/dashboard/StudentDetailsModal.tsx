import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface StudentDetailsModalProps {
  student: any;
  onClose: () => void;
}

const StudentDetailsModal: React.FC<StudentDetailsModalProps> = ({ student, onClose }) => {
  const [activeTab, setActiveTab] = useState<'courses' | 'certificates'>("courses");

  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-semibold">
            {student.student?.name || "Student Details"}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex space-x-4 mb-6 p-4">
          <button
            onClick={() => setActiveTab("courses")}
            className={`px-4 py-2 ${
              activeTab === "courses" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            } rounded-lg transition-colors`}
          >
            Courses ({student.courses?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`px-4 py-2 ${
              activeTab === "certificates" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            } rounded-lg transition-colors`}
          >
            Certificates ({student.certificates?.length || 0})
          </button>
        </div>

        <div className="p-6">
          {activeTab === "courses" ? (
            <div className="space-y-4">
              {student.courses && student.courses.length > 0 ? (
                student.courses.map((course: any) => (
                  <div key={course._id} className="p-4 border rounded-lg">
                    <h3 className="font-semibold text-lg">
                      {course.title || "Untitled Course"}
                    </h3>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">
                          Platform: {course.platform || "N/A"}
                        </p>
                        <p className="text-sm text-gray-600">
                          Status: {course.status || "N/A"}
                        </p>
                      </div>
                      <div>
                        {course.link && (
                          <a
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Course Link
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">
                  No courses registered
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {student.certificates && student.certificates.length > 0 ? (
                student.certificates.map((cert: any) => (
                  <div key={cert._id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{cert.name || "Unnamed Certificate"}</h3>
                        {cert.fileUrl && (
                          <a
                            href={
                              cert.fileUrl.startsWith("http")
                                ? cert.fileUrl
                                : `http://localhost:5000/${cert.fileUrl.replace(/\\/g, "/")}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-500">
                  No certificates available
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDetailsModal;
