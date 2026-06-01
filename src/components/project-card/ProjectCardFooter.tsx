import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaEye, FaInfoCircle } from "react-icons/fa";

interface ProjectCardFooterProps {
  isDark: boolean;
  isLiked: boolean;
  likes: string;
  views: string;
  title: string;
  showDetails: boolean;
  onLike: (e: React.MouseEvent) => void;
  onOpenDetails: () => void;
}

const ProjectCardFooter: React.FC<ProjectCardFooterProps> = ({
  isDark,
  isLiked,
  likes,
  views,
  title,
  showDetails,
  onLike,
  onOpenDetails,
}) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-700/20 pt-5 mt-auto w-full">
      <div className="flex items-center space-x-6">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={onLike}
          className={`flex items-center space-x-2 transition-colors ${
            isLiked
              ? "text-red-500"
              : isDark
                ? "text-gray-400 hover:text-red-400"
                : "text-gray-500 hover:text-red-500"
          }`}
          type="button"
        >
          <motion.div
            animate={isLiked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <FaHeart size={18} />
          </motion.div>
          <span className="text-sm font-semibold">{likes} likes</span>
        </motion.button>

        <div
          className={`flex items-center space-x-2 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <FaEye size={18} />
          <span className="text-sm font-semibold">{views} views</span>
        </div>
      </div>

      {showDetails && (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={onOpenDetails}
          className={`p-2.5 rounded-full transition-colors ${
            isDark
              ? "bg-white/10 text-yellow-300 hover:bg-white/20"
              : "bg-blue-50 text-blue-600 hover:bg-blue-100"
          }`}
          title="View project details"
          aria-label={`View details for ${title}`}
          type="button"
        >
          <FaInfoCircle size={18} />
        </motion.button>
      )}
    </div>
  );
};

export default React.memo(ProjectCardFooter);
