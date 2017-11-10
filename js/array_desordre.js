
// ___________________________ Le tableau commun a tout le reste du code ______________________________

var tab = [506, 69, 990, 818, 576, 204, 670, 19, 222, 838, 427, 932, 444, 522, 215, 517, 790, 357, 655, 575, 922, 68, 251, 202, 391, 126, 189, 397, 376, 89, 905, 583, 864, 100, 232, 503, 663, 112, 501, 81, 407, 728, 622, 858, 455, 320, 491, 349, 290, 330, 946, 282, 385, 404, 16, 460, 255, 478, 441, 489, 408, 991, 738, 485, 971, 508, 862, 285, 803, 72, 523, 117, 748, 137, 835, 855, 719, 635, 591, 976, 782, 180, 253, 109, 381, 31, 681, 963, 533, 54, 626, 955, 709, 367, 873, 206, 301, 869, 416, 974, 214, 934, 134, 768, 722, 545, 468, 868, 546, 47, 849, 589, 674, 588, 852, 318, 402, 445, 539, 93, 565, 426, 970, 732, 275, 421, 559, 274, 155, 442, 58, 428, 766, 634, 191, 906, 175, 375, 210, 707, 807, 118, 361, 429, 699, 48, 798, 237, 372, 60, 983, 560, 767, 291, 685, 925, 572, 980, 138, 977, 878, 383, 601, 111, 967, 590, 413, 284, 497, 183, 311, 902, 289, 904, 867, 639, 806, 380, 763, 368, 843, 969, 865, 4, 814, 246, 518, 10, 949, 473, 374, 298, 77, 886, 785, 120, 720, 340, 853, 193, 796, 471, 640, 986, 221, 355, 880, 860, 392, 500, 931, 307, 21, 172, 953, 527, 600, 20, 84, 59, 781, 614, 799, 235, 28, 938, 924, 774, 499, 399, 896, 729, 371, 942, 351, 234, 919, 755, 593, 617, 779, 286, 459, 678, 1000, 973, 725, 494, 861, 675, 393, 281, 813, 999, 292, 916, 736, 753, 365, 582, 577, 968, 945, 67, 121, 995, 777, 164, 203, 305, 384, 985, 356, 612, 882, 223, 14, 1, 647, 418, 178, 599, 24, 859, 458, 297, 829, 145, 430, 185, 585, 44, 666, 893, 743, 410, 566, 538, 939, 279, 778, 815, 479, 881, 537, 483, 791, 520, 495, 742, 792, 425, 700, 287, 437, 928, 57, 342, 543, 310, 359, 386, 303, 80, 129, 50, 487, 866, 913, 326, 705, 446, 265, 708, 61, 449, 160, 82, 528, 716, 313, 574, 822, 35, 885, 306, 606, 268, 603, 581, 370, 512, 684, 691, 283, 943, 46, 90, 226, 388, 940, 842, 417, 690, 710, 910, 780, 243, 558, 627, 794, 360, 452, 569, 266, 514, 899, 898, 328, 571, 153, 64, 55, 760, 63, 960, 299, 488, 195, 941, 547, 937, 907, 641, 511, 596, 795, 85, 448, 99, 876, 36, 827, 132, 13, 793, 502, 832, 752, 751, 848, 490, 535, 863, 159, 668, 208, 730, 993, 762, 871, 540, 693, 62, 918, 321, 912, 994, 211, 131, 959, 463, 187, 389, 8, 32, 424, 962, 130, 75, 812, 125, 95, 936, 277, 562, 978, 49, 107, 70, 605, 642, 333, 352, 917, 378, 115, 149, 124, 493, 263, 218, 323, 749, 723, 276, 961, 646, 73, 877, 40, 701, 17, 216, 598, 168, 735, 660, 466, 534, 346, 217, 927, 269, 570, 629, 542, 580, 423, 34, 116, 262, 875, 592, 469, 207, 406, 474, 174, 256, 957, 150, 526, 241, 88, 958, 746, 152, 930, 935, 270, 239, 403, 363, 573, 673, 731, 805, 25, 227, 658, 139, 477, 844, 711, 354, 158, 296, 156, 450, 300, 173, 649, 981, 461, 447, 324, 213, 148, 205, 332, 952, 228, 387, 317, 824, 248, 66, 737, 480, 900, 816, 920, 434, 988, 733, 644, 692, 247, 555, 926, 91, 510, 833, 821, 481, 249, 823, 350, 146, 454, 197, 199, 712, 636, 264, 196, 414, 734, 552, 39, 278, 104, 933, 657, 754, 840, 260, 396, 695, 53, 998, 764, 825, 225, 219, 879, 92, 652, 462, 52, 688, 309, 530, 549, 465, 750, 726, 831, 621, 33, 26, 951, 18, 979, 739, 656, 343, 686, 295, 470, 9, 669, 689, 784, 671, 923, 314, 567, 697, 682, 914, 554, 680, 113, 557, 43, 536, 331, 872, 316, 637, 929, 415, 921, 339, 989, 837, 747, 610, 625, 667, 787, 5, 405, 304, 419, 135, 400, 608, 901, 548, 308, 563, 561, 103, 897, 422, 624, 997, 870, 41, 280, 615, 74, 683, 984, 45, 956, 348, 254, 329, 200, 186, 604, 83, 810, 839, 595, 182, 6, 102, 163, 194, 756, 704, 631, 220, 996, 382, 401, 229, 482, 597, 464, 586, 97, 759, 56, 613, 250, 259, 809, 147, 632, 551, 509, 42, 435, 531, 521, 438, 496, 515, 620, 568, 519, 267, 532, 800, 524, 638, 834, 665, 409, 140, 244, 950, 457, 162, 698, 411, 71, 804, 190, 553, 38, 789, 817, 271, 744, 377, 105, 564, 679, 888, 801, 828, 51, 556, 188, 826, 529, 101, 181, 584, 602, 987, 802, 847, 797, 653, 184, 12, 706, 892, 22, 772, 114, 578, 334, 23, 765, 541, 143, 883, 394, 110, 476, 964, 965, 975, 819, 151, 651, 740, 166, 703, 594, 909, 242, 758, 98, 96, 841, 369, 302, 231, 579, 7, 894, 133, 808, 525, 676, 475, 257, 198, 550, 718, 233, 252, 786, 715, 659, 672, 628, 37, 771, 440, 238, 170, 169, 94, 272, 224, 811, 713, 420, 366, 915, 230, 486, 623, 353, 677, 630, 890, 209, 788, 439, 122, 727, 851, 944, 773, 335, 724, 412, 857, 65, 654, 513, 157, 322, 294, 467, 76, 236, 846, 27, 884, 611, 2, 347, 721, 947, 456, 344, 261, 702, 972, 903, 128, 451, 436, 895, 966, 992, 3, 745, 258, 453, 761, 123, 648, 856, 694, 212, 390, 154, 338, 127, 108, 770, 609, 142, 687, 498, 161, 362, 664, 643, 889, 398, 11, 327, 911, 616, 619, 106, 171, 141, 379, 319, 982, 288, 431, 544, 874, 507, 315, 472, 293, 373, 845, 587, 776, 443, 358, 336, 783, 504, 650, 607, 337, 245, 954, 15, 714, 167, 505, 484, 179, 395, 176, 312, 433, 165, 891, 696, 757, 325, 177, 661, 492, 341, 775, 741, 948, 645, 87, 364, 830, 345, 854, 662, 432, 86, 201, 908, 836, 192, 29, 887, 618, 240, 119, 769, 30, 717, 273, 79, 78, 633, 144, 516, 850, 820, 136
];