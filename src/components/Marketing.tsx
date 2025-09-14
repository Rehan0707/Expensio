import React, { useState } from 'react';
import { 
  Megaphone, 
  Target, 
  TrendingUp, 
  Eye, 
  MousePointer,
  BarChart3,
  Plus,
  Play,
  Pause,
  Edit,
  Share2,
  DollarSign
} from 'lucide-react';

const Marketing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'campaigns', label: 'Campaigns' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'creatives', label: 'AI Creatives' },
    { id: 'automation', label: 'Automation' }
  ];

  const campaigns = [
    {
      id: 1,
      name: 'Diwali Sale Campaign',
      status: 'active',
      platform: 'Facebook',
      budget: 25000,
      spent: 18750,
      impressions: 125000,
      clicks: 3250,
      conversions: 89,
      roi: 245
    },
    {
      id: 2,
      name: 'Winter Collection Launch',
      status: 'paused',
      platform: 'Google Ads',
      budget: 15000,
      spent: 12000,
      impressions: 89000,
      clicks: 1890,
      conversions: 45,
      roi: 187
    },
    {
      id: 3,
      name: 'WhatsApp Marketing',
      status: 'active',
      platform: 'WhatsApp',
      budget: 10000,
      spent: 8500,
      impressions: 45000,
      clicks: 2100,
      conversions: 67,
      roi: 298
    }
  ];

  const creatives = [
    {
      id: 1,
      type: 'poster',
      title: 'Diwali Sale Poster',
      language: 'Hindi',
      platform: 'Instagram',
      performance: 'High',
      engagement: 8.5
    },
    {
      id: 2,
      type: 'video',
      title: 'Product Demo Video',
      language: 'English',
      platform: 'YouTube',
      performance: 'Medium',
      engagement: 6.2
    },
    {
      id: 3,
      type: 'banner',
      title: 'Winter Collection Banner',
      language: 'English',
      platform: 'Facebook',
      performance: 'High',
      engagement: 9.1
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Marketing KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30">
              <Eye className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <span className="text-sm font-medium text-blue-600">+15.2%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Total Impressions
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">1.2M</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-green-50 dark:bg-green-900/30">
              <MousePointer className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <span className="text-sm font-medium text-green-600">+22.8%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Click-Through Rate
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">3.45%</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30">
              <Target className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <span className="text-sm font-medium text-purple-600">+18.5%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Conversions
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">1,847</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 rounded-lg bg-orange-50 dark:bg-orange-900/30">
              <DollarSign className="text-orange-600 dark:text-orange-400" size={24} />
            </div>
            <span className="text-sm font-medium text-orange-600">+31.2%</span>
          </div>
          <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">
            Average ROI
          </h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">245%</p>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Active Campaigns Performance
          </h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            Create Campaign
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Campaign</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Platform</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Budget</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Spent</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">CTR</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">ROI</th>
                <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">{campaign.name}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{campaign.platform}</td>
                  <td className="py-3 px-4 text-gray-900 dark:text-white">₹{campaign.budget.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-900 dark:text-white">₹{campaign.spent.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-900 dark:text-white">
                    {((campaign.clicks / campaign.impressions) * 100).toFixed(2)}%
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-medium text-green-600">{campaign.roi}%</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">AI Marketing Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Campaign Optimization</h4>
            <p className="text-purple-100 text-sm">
              Increase budget on "Diwali Sale" by 40% for optimal ROI. Best performance time: 6-9 PM.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Audience Insights</h4>
            <p className="text-purple-100 text-sm">
              Target audience shows 67% higher engagement with video content during weekends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCampaigns = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Campaign Management
        </h3>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700">
            <BarChart3 size={20} />
            Analytics
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus size={20} />
            New Campaign
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {campaign.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{campaign.platform}</p>
              </div>
              <div className="flex gap-2">
                {campaign.status === 'active' ? (
                  <button className="p-1 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30 rounded">
                    <Pause size={16} />
                  </button>
                ) : (
                  <button className="p-1 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded">
                    <Play size={16} />
                  </button>
                )}
                <button className="p-1 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                  <Edit size={16} />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Budget</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  ₹{campaign.budget.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Spent</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  ₹{campaign.spent.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">ROI</span>
                <span className="text-sm font-medium text-green-600">{campaign.roi}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Conversions</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {campaign.conversions}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCreatives = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          AI-Generated Creatives
        </h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          <Plus size={20} />
          Generate Creative
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {creatives.map((creative) => (
          <div key={creative.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-white font-medium">{creative.type.toUpperCase()}</span>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {creative.title}
            </h4>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Language</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{creative.language}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Platform</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{creative.platform}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Engagement</span>
                <span className="text-sm font-medium text-green-600">{creative.engagement}/10</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50">
                <Edit size={16} />
                Edit
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'campaigns':
        return renderCampaigns();
      case 'analytics':
        return <div className="text-center text-gray-500 py-12">Marketing analytics dashboard</div>;
      case 'creatives':
        return renderCreatives();
      case 'automation':
        return <div className="text-center text-gray-500 py-12">Marketing automation interface</div>;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          AI Marketing & Campaigns
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Create, manage, and optimize marketing campaigns with AI-powered insights
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

export default Marketing;