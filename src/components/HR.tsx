import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Clock, 
  DollarSign, 
  TrendingUp,
  UserCheck,
  UserX,
  Award,
  Plus,
  Download,
  Search,
  Filter,
  Edit,
  Trash2,
  X
} from 'lucide-react';
import { useData } from '../contexts/DataContext';
import { useToast } from '../contexts/ToastContext';

const HR: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');

  const { employees, addEmployee, updateEmployee, deleteEmployee, isLoading } = useData();
  const { addToast } = useToast();

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'employees', label: 'Employees' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'payroll', label: 'Payroll' },
    { id: 'performance', label: 'Performance' }
  ];

  const departments = ['Technology', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'];
  const performanceLevels = ['Excellent', 'Good', 'Average', 'Poor'];

  // Filter employees based on search and department
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || employee.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  const attendanceData = [
    { date: '2024-01-15', present: 22, absent: 2, late: 1 },
    { date: '2024-01-14', present: 24, absent: 0, late: 2 },
    { date: '2024-01-13', present: 23, absent: 1, late: 0 },
    { date: '2024-01-12', present: 25, absent: 0, late: 0 }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* HR KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <Users className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Total Employees
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
              <UserCheck className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">92%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Attendance Rate
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">22/24</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30">
              <DollarSign className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <span className="text-sm font-medium text-purple-600">+8%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Monthly Payroll
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">₹14,50,000</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/30">
              <Award className="text-orange-600 dark:text-orange-400" size={24} />
            </div>
            <span className="text-sm font-medium text-orange-600">85%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Performance Score
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">4.2/5</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Quick HR Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
            <Plus className="text-blue-600 dark:text-blue-400 mb-2" size={24} />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Add Employee</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
            <DollarSign className="text-green-600 dark:text-green-400 mb-2" size={24} />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">Process Payroll</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">
            <Clock className="text-purple-600 dark:text-purple-400 mb-2" size={24} />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Mark Attendance</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-lg bg-orange-50 dark:bg-orange-900/30 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">
            <Award className="text-orange-600 dark:text-orange-400 mb-2" size={24} />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Performance Review</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Today's Attendance
          </h3>
          <div className="space-y-3">
            {attendanceData[0] && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Present</span>
                  <span className="font-medium text-green-600">{attendanceData[0].present}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Absent</span>
                  <span className="font-medium text-red-600">{attendanceData[0].absent}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Late</span>
                  <span className="font-medium text-yellow-600">{attendanceData[0].late}</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Upcoming Events
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-900 dark:text-white">Salary processing - Jan 25</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-900 dark:text-white">Team meeting - Jan 18</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-900 dark:text-white">Performance reviews - Jan 30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmployees = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
            <Filter size={20} />
            Filter
          </button>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus size={20} />
          Add Employee
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Employee</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Position</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Department</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Salary</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Attendance</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Performance</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {employee.name.charAt(0)}
                        </div>
                        <span className="text-gray-900 dark:text-white font-medium">{employee.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{employee.position}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{employee.department}</td>
                    <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">₹{employee.salary.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        employee.attendance >= 95 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : employee.attendance >= 90
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {employee.attendance}%
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        employee.performance === 'Excellent'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {employee.performance}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          View
                        </button>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'employees':
        return renderEmployees();
      case 'attendance':
        return <div className="text-center text-gray-500 py-12">Attendance tracking interface</div>;
      case 'payroll':
        return <div className="text-center text-gray-500 py-12">Payroll management interface</div>;
      case 'performance':
        return <div className="text-center text-gray-500 py-12">Performance management interface</div>;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          HR & Employee Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive employee management with AI-powered insights
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default HR;