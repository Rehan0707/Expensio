import React, { useState } from 'react';
import { 
  FileCheck, 
  Calendar, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Download,
  Plus,
  Search,
  Filter,
  FileText,
  Shield,
  DollarSign
} from 'lucide-react';

const Compliance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'gst', label: 'GST & Tax' },
    { id: 'documents', label: 'Documents' },
    { id: 'calendar', label: 'Compliance Calendar' },
    { id: 'schemes', label: 'Govt Schemes' }
  ];

  const complianceItems = [
    {
      id: 1,
      type: 'GST Return',
      description: 'GSTR-3B filing for December 2023',
      dueDate: '2024-01-20',
      status: 'pending',
      priority: 'high',
      penalty: 5000
    },
    {
      id: 2,
      type: 'TDS Return',
      description: 'Quarterly TDS return filing',
      dueDate: '2024-01-31',
      status: 'in-progress',
      priority: 'medium',
      penalty: 2000
    },
    {
      id: 3,
      type: 'Income Tax',
      description: 'Advance tax payment',
      dueDate: '2024-03-15',
      status: 'completed',
      priority: 'low',
      penalty: 0
    }
  ];

  const documents = [
    {
      id: 1,
      name: 'GST Registration Certificate',
      type: 'Certificate',
      uploadDate: '2023-04-15',
      expiryDate: 'N/A',
      status: 'valid'
    },
    {
      id: 2,
      name: 'PAN Card',
      type: 'Identity',
      uploadDate: '2023-04-15',
      expiryDate: 'N/A',
      status: 'valid'
    },
    {
      id: 3,
      name: 'Trade License',
      type: 'License',
      uploadDate: '2023-04-15',
      expiryDate: '2024-04-15',
      status: 'expiring-soon'
    }
  ];

  const schemes = [
    {
      id: 1,
      name: 'MUDRA Loan Scheme',
      category: 'Finance',
      eligibility: '95%',
      maxAmount: '₹10,00,000',
      description: 'Collateral-free loans for small businesses',
      deadline: '2024-03-31'
    },
    {
      id: 2,
      name: 'Startup India Scheme',
      category: 'Business',
      eligibility: '78%',
      maxAmount: '₹50,00,000',
      description: 'Tax benefits and funding support for startups',
      deadline: '2024-06-30'
    },
    {
      id: 3,
      name: 'Digital India Initiative',
      category: 'Technology',
      eligibility: '88%',
      maxAmount: '₹25,00,000',
      description: 'Digitalization support for businesses',
      deadline: '2024-12-31'
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Compliance Status */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
              <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
            </div>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Compliant Items
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">18</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/30">
              <Clock className="text-yellow-600 dark:text-yellow-400" size={24} />
            </div>
            <span className="text-sm font-medium text-yellow-600">3 pending</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Pending Actions
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">5</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/30">
              <AlertTriangle className="text-red-600 dark:text-red-400" size={24} />
            </div>
            <span className="text-sm font-medium text-red-600">2 overdue</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Risk Items
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <DollarSign className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <span className="text-sm font-medium text-blue-600">Potential</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Penalty Risk
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">₹7,000</p>
        </div>
      </div>

      {/* Urgent Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Urgent Compliance Actions
        </h3>
        <div className="space-y-4">
          {complianceItems.filter(item => item.status === 'pending').map((item) => (
            <div key={item.id} className={`flex items-center justify-between p-4 rounded-lg border-l-4 ${
              item.priority === 'high' 
                ? 'bg-red-50 border-red-400 dark:bg-red-900/20 dark:border-red-400'
                : item.priority === 'medium'
                ? 'bg-yellow-50 border-yellow-400 dark:bg-yellow-900/20 dark:border-yellow-400'
                : 'bg-blue-50 border-blue-400 dark:bg-blue-900/20 dark:border-blue-400'
            }`}>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <AlertTriangle className={`${
                    item.priority === 'high' ? 'text-red-600' :
                    item.priority === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                  }`} size={20} />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.type}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Due: {item.dueDate}
                </p>
                {item.penalty > 0 && (
                  <p className="text-sm text-red-600">
                    Penalty: ₹{item.penalty.toLocaleString()}
                  </p>
                )}
              </div>
              <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                Take Action
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Calendar Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Upcoming Deadlines
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Calendar className="text-blue-600" size={20} />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  GST Return Filing
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">January 20, 2024</p>
              </div>
              <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 px-2 py-1 rounded-full">
                5 days left
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Calendar className="text-blue-600" size={20} />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  TDS Return
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">January 31, 2024</p>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 px-2 py-1 rounded-full">
                16 days left
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            AI Compliance Advisor
          </h3>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                Tax Optimization
              </h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                You can save ₹12,000 annually by claiming input tax credit on office expenses.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
              <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
                Scheme Opportunity
              </h4>
              <p className="text-green-700 dark:text-green-300 text-sm">
                You're eligible for MUDRA loan with 95% approval probability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search documents..."
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
          Upload Document
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Document</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Upload Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Expiry Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <FileText className="text-blue-600" size={20} />
                        <span className="text-gray-900 dark:text-white font-medium">{doc.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{doc.type}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{doc.uploadDate}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{doc.expiryDate}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        doc.status === 'valid' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : doc.status === 'expiring-soon'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {doc.status === 'expiring-soon' ? 'Expiring Soon' : doc.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          <Download size={16} />
                        </button>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          View
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

  const renderSchemes = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Government Schemes & Benefits
        </h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          <Shield size={20} />
          Check Eligibility
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {schemes.map((scheme) => (
          <div key={scheme.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {scheme.name}
              </h4>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                scheme.category === 'Finance' 
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  : scheme.category === 'Business'
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                  : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
              }`}>
                {scheme.category}
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {scheme.description}
            </p>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Max Amount</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {scheme.maxAmount}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Deadline</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {scheme.deadline}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Eligibility</span>
                <div className="flex items-center gap-2">
                  <div className="w-12 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: scheme.eligibility }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-green-600">{scheme.eligibility}</span>
                </div>
              </div>
            </div>

            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'gst':
        return <div className="text-center text-gray-500 py-12">GST and tax management interface</div>;
      case 'documents':
        return renderDocuments();
      case 'calendar':
        return <div className="text-center text-gray-500 py-12">Compliance calendar interface</div>;
      case 'schemes':
        return renderSchemes();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Compliance & Government Integration
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Stay compliant and leverage government schemes with AI-powered assistance
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

export default Compliance;